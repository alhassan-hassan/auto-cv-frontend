import BulletedLineData from "components/bulleted-line-data/BulletedLineData";

const {
  default: BoldOneLineData,
} = require("components/one-line-data/BoldOneLineData");

const MultiLineData = ({ firm, location, duration, position, impacts }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
      }}
    >
      <BoldOneLineData left={`${firm} - ${location}`} right={duration} />
      <BoldOneLineData left={position} />
      <div>
        {impacts.map((impact, index) => (
          <BulletedLineData key={impact} data={impact} />
        ))}
      </div>
    </div>
  );
};

export default MultiLineData;
