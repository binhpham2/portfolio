from pixel import PixelTransformation as PT
from image import ImageTransformation as IT
from gif import GifTransformation as GT

if __name__ == "__main__":
    # Initialising required helper objects
    PT_obj = PT()
    IT_obj = IT()
    GT_obj = GT()

    # Test object initialisation(s)
    """
    PT_obj.help()
    IT_obj.help()
    """
    # Folder path configs (only for running module from root - sumiefolio)
    input_path = "./inkmotif/input/inklines.png"
    output_path = "./inkmotif/output/inklines.png"
    transform_pixel = PT_obj.make_dark_pixel_white

    # Transform image
    IT_obj.transform(
        input_path,
        output_path,
        transform_pixel
    )
    
    # Transform GIF
    #GT.remove_white_background("./inkmotif/input/splash.gif", "./inkmotif/output/splash.gif")