import sys
from pytube import YouTube
def Download(link):
    try:
         YouTube(link)
         print("success Link ")
         
    except:
        print("Error link or connection failed")
    
link  = sys.argv[1]
Download(link)