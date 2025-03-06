import React from "react";
import Card from "../Card/Card";

const home = () => {
  return (
    <div>
        <Card 
          imageSrc= "https://media.licdn.com/dms/image/v2/D5612AQFhxrboR1pVtQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1689693901792?e=2147483647&v=beta&t=LRLUvkrYr0iWTiDs6SDgUfKj_7BpLAzjSDHVDepNKNQ"
          title="Wifi7" 
          description="WiFi 7 is the upcoming WiFi standard, also known as IEEE 802.11be Extremely High Throughput (EHT). It works across all three bands (2.4 GHz, 5 GHz, and 6 GHz) to fully utilize spectrum resources. While WiFi 6 was built in response to the growing number of devices in the world, WiFi 7's goal is to deliver astounding speeds for every device with greater efficiency. If you're struggling with constant buffering, lag, or congestion, a WiFi 7 router may be your best solution.

WiFi 7 introduces 320 MHz ultra-wide bandwidth, 4096-QAM, Multi-RU, and Multi-Link Operation to provide speeds 4.8× faster than WiFi 6 and 13× faster than WiFi 5. Unlock more scenarios than ever before." 
        />

    </div>
  );
}

export default home;