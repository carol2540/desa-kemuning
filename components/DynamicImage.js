import { Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";


export const DynamicImage = ({ src, alt, width, height, position, ...restProps }) => {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleImageLoad = () => {
      setIsLoading(true);
    };
  
    return (
      <Skeleton position={position} {...restProps} isLoaded={isLoading} width={width} height={height}>
        <Image
          src={src}
          alt={alt}
          width={"100%"}
          height={height}
          onLoad={handleImageLoad}
          {...restProps}
        />
      </Skeleton>
    );
  };
  

  