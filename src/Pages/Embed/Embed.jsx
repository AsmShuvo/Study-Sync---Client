import React from "react";

const Embed = ({ link }) => {
  return (
    <div>
      <iframe
        title="Embedded PDF"
        width="100%"
        height="500px"
        src={link}
        frameborder="0"
        allowfullscreen="true"
        sandbox="allow-forms allow-modals allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Embed;
