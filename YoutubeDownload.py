import sys
from pytube import YouTube

def Download(link):
    try:
        youtubeObject = YouTube(link)
        youtubeObject = youtubeObject.streams.get_lowest_resolution()
        youtubeObject.download()
        print("This download has been completed!")
    except:
        print(" ")
    
link  = sys.argv[1]
Download(link)