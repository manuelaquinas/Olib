import React from "react";
import CardVideo from "./CardVideo";

const CardListVideo = ({ data }) => {
  if (data === null) {
    return null;
  } else {
    return (
      <div>
        <h2 className="SearchContainerTitle mt-4">Google Videos Data</h2>
        {data.video_results.map((data, i) => {
          return (
            <CardVideo
              key={i}
              title={data.title}
              link={data.video_link}
              length={data.length}
              description={data.snippet}
              views={data.views}

              // title={data.title}
              // link={data.link}
              // length={data.length}
              // description={data.description}
              // views={data.views}
            />
          );
        })}
      </div>
    );
  }
};

export default CardListVideo;
