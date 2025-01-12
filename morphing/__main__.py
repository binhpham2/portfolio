from pixel import PixelTransformation as PT
from image import ImageTransformation as IT

if __name__ == "__main__":
    # Initialising required helper objects
    PT_obj = PT()
    IT_obj = IT()

    # Test object initialisation(s)
    PT_obj.help()
    IT_obj.help()

    # Folder path configs (only for running module from root - sumiefolio)
    input_path = "./inkmotif/input/latern.png"
    output_path = "./inkmotif/output/latern.png"
    transform_pixel = PT_obj.make_light_pixel_white

    # Transform image
    IT_obj.transform(
        input_path,
        output_path,
        transform_pixel
    )