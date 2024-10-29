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
    input_img_dir = "./inkmotif/input"
    output_img_dir = "./inkmotif/output"

    # Image transformation configs
    input_img_name = "mountains"
    output_img_suffix = "_transparent_background"
    transform_pixel = PT_obj.make_light_pixel_transparent

    # Transform image
    IT_obj.transform(
        f"{input_img_dir}/{input_img_name}.png",
        f"{output_img_dir}/{input_img_name}{output_img_suffix}.png",
        transform_pixel
    )