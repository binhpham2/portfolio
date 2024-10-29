class PixelTransformation:
    def __init__(self):
        pass

    def help(self):
        print("PixelTransformation module:...")

    def make_light_pixel_transparent(self, pixel):
        # Light threshold
        threshold = 150
        
        # If all 3 R, G, B values are greater than the threshold, clear the pixel.
        # If not, keep the pixel as is.
        if pixel[0] > threshold and pixel[1] > threshold and pixel[2] > threshold:
            return (0, 0, 0, 0)
        else:
            return pixel