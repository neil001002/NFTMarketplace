import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  roadmapDetails_phase_1,
  roadmapDetails_phase_2,
  roadmapDetails_phase_3,
  roadmapDetails_phase_4,
} from "../constants";
import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";
import AnimationCircleGif from "../assets/animation_circle_small_6.gif";
import { useEffect, useState } from "react";
import Loader2 from "./Loader";

const RoadmapCard = ({ roadmap }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        // background: "#1d1836",
        background: "black",
        color: "#fff",
        borderTopWidth: "1px",
        borderColor: "#9548ee",
        boxShadow: "none",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={roadmap.date}
      iconStyle={{
        background: "black",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full ">
          <img
            src={AnimationCircleGif}
            alt="circle animation"
            className="w-[100%] h-[100%] object-cover rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {roadmap.title}
        </h3>
        {/* <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {roadmap.company_name}
          </p> */}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {roadmap.points.map((point, index) => (
          <li
            key={`roadmap-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Roadmap = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader2 />;
  }

  return (
    <>
      <Navbar />
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p> */}
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-center mt-10`}
        >
          Phase 1:{" "}
          <span className="text-[#9548ee] ">Launch and Establishment</span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col"
      >
        <VerticalTimeline lineColor={"#9548ee"}>
          {roadmapDetails_phase_1.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Phase 2: */}
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p> */}
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-center mt-10`}
        >
          Phase 2:{" "}
          <span className="text-[#9548ee] ">
            Expansion and Collaboration
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col"
      >
        <VerticalTimeline lineColor={"#9548ee"}>
          {roadmapDetails_phase_2.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Phase 3: */}
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p> */}
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-center mt-10`}
        >
          Phase 3:{" "}
          <span className="text-[#9548ee] ">
            Integration and Engagement
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col"
      >
        <VerticalTimeline lineColor={"#9548ee"}>
          {roadmapDetails_phase_3.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </motion.div>

      {/* Phase 4: */}
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p> */}
        <motion.h2
          variants={fadeIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionHeadText} text-center mt-10`}
        >
          Phase 4:{" "}
          <span className="text-[#9548ee] ">
            Diversification and Legacy
          </span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col"
      >
        <VerticalTimeline lineColor={"#9548ee"}>
          {roadmapDetails_phase_4.map((roadmap, index) => (
            <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default Roadmap;
