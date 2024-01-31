import os
from django.core.files import File
from rest_framework.response import Response
from .serializers import ImageSerializer,UserSerializer,GetImageSerializer
from rest_framework.decorators import api_view,parser_classes,permission_classes,authentication_classes
from rest_framework.parsers import MultiPartParser,FormParser,JSONParser
from rest_framework import status
from .models import ConvertedImg,Images
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import pathlib


# @api_view(['GET'])
# @authentication_classes([SessionAuthentication,TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def get_Image(request):
#     obj=Images.objects.filter(user=request.user)
#     serializer=GetImageSerializer(obj,context={"request":request} ,many=True)
#     if serializer.data:
#         return Response(serializer.data,status=status.HTTP_200_OK)
#     return Response("user has not uploaded any images",status=status.HTTP_204_NO_CONTENT)



@api_view(['POST'])
def register_view(request):
    if request.method=='POST':
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user=User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token=Token.objects.create(user=user)
            return Response({"token":token.key,'user':serializer.data},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
            
@api_view(['POST'])
def login_view(request):
    user=get_object_or_404(User,username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"error":"User not found"},status=status.HTTP_404_NOT_FOUND)
    token,create=Token.objects.get_or_create(user=user)
    serializer=UserSerializer(user)
    return Response({'token':token.key,"user":serializer.data},status=status.HTTP_200_OK)
      

@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout_view(request):
    request.auth.delete()
    return Response("User logged out",status=status.HTTP_200_OK)


@api_view(['POST'])
@parser_classes([MultiPartParser,FormParser])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])

def hanlde_image(request):
    if request.method=="POST":
        serializer=ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            imgobj=serializer.instance
            id=imgobj.id
            print("id: "+str(id))
            return Response({"id":id},status=status.HTTP_200_OK)
        else:
            serializer=ImageSerializer()
            return Response(serializer.error_messages,status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# @authentication_classes([SessionAuthentication,TokenAuthentication])
# @permission_classes([IsAuthenticated])

# def cvt_img(request,pk):
#     obj=get_object_or_404(Images,id=pk)
#     image_path=os.getcwd()+obj.image.url
#     extn=pathlib.Path(image_path).suffix
#     try:
#         got_image = ConvertedImg.objects.filter(name__name=obj.name)
#         got_image.delete()
#     except AttributeError:
#         print("not found")
#     model_path=os.getcwd()+'/backend/Autoencoder/model.pth'
#     model=CVAE()
#     device='cpu'
#     model.load_state_dict(torch.load(model_path, map_location=device))
#     transform_image=process_image(image_path)
#     model.eval()
#     with torch.inference_mode():
#         denoised, _, _ = model(transform_image.unsqueeze(0).to(device))

#     denoised_image_pil = transforms.ToPILImage()(denoised.squeeze(0).cpu())
#     denoised_image_io = BytesIO()
#     denoised_image_pil.save(denoised_image_io, format=extn[1:])

#     models=ConvertedImg()
#     models.name=obj
#     models.img.save(obj.name+extn,ContentFile(denoised_image_io.getvalue()))    
#     models.save()
#     img_url =ConvertedImg.objects.get(name__name=obj.name)
#     return Response({"image":request.build_absolute_uri(img_url.img.url)})



# @api_view(['DELETE'])
# @authentication_classes([SessionAuthentication,TokenAuthentication])
# @permission_classes([IsAuthenticated])
# def delete_image(request,pk):
#     obj=get_object_or_404(Images,id=pk)
#     obj.delete()
#     return Response({"message":"image deleted"},status=status.HTTP_200_OK)

    

