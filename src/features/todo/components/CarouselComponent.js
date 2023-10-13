import React from "react";
import { Dimensions, Image } from "react-native";
import styled from "styled-components/native";
import Carousel from "react-native-reanimated-carousel";

const CarouselItemView = styled.View`
  flex: 1;
  justify-content: center;
  border: 1px;
  border-radius: 20px;
  overflow: hidden;
`;

const CarouselView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;
export const CarouselComponent = ({ data }) => {
  const width = Dimensions.get("window").width;
  const height = width / 2;
  return (
    <CarouselView>
      <Carousel
        loop
        width={width}
        height={height}
        autoplay={true}
        mode="parallax"
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log(index)}
        parallaxScrollingScale={0.9}
        parallaxScrollingOffset={50}
        data={data}
        renderItem={({ item }) => (
          <CarouselItemView>
            <Image
              style={{ width: width, height: height }}
              source={{ uri: item.illustration }} // Replace 'imageUri' with the key in your data containing the image URL
            />
          </CarouselItemView>
        )}
      />
    </CarouselView>
  );
};
