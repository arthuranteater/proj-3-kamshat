import * as React from "react";
import { useRef, useState, useEffect} from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../utils/useDimensions";
import { MenuToggle } from "../../components/MenuToggle";
import CityForm from "../../components/CityForm/index";
import "./style.css";

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variantsLi = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const continents = ["North America", "South America", "Europe", "Asia", "Oceania", "Antarctica", "Africa"];

const Home = () => {
  const [clickedContinent, setClickedContinent] = useState(
    null
  ) 
  const [currentInput, setCurrentInput] = useState(
    ""
  )

  const [clickedCountry, setClickedCountry] = useState(
    null
  )
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [temporaryObject, setTemporaryObject] = useState({
    "North America": [],
    "South America": [],
    "Europe": [],
    "Asia": [],
    "Oceania": [],
    "Antarctica": [],
    "Africa": []
  })

  useEffect(
    () => {
      console.log(temporaryObject)
    }, 
    [temporaryObject]
  )

  const handleAdd = e => {
    const addedCountry = e.target.getAttribute("data");
    setClickedContinent(addedCountry)
  }

  const handleInput = e => {
    console.log(e.target.value)
    const userInput = e.target.value
    setCurrentInput(userInput)
  }

  const handleAddCountry = () => {
  setTemporaryObject({
    ...temporaryObject,
    [clickedContinent]:
      [
       ...temporaryObject[clickedContinent],
       currentInput   
      ]
  })
}

const handleClickedCountry = (e) => {
  console.log(e.target)
}

  const input = (
    <div className="input-field">
      <input className="text-placeholder" type="text" onChange={handleInput} style={{width: 80}}/>
      <button className="icon-placeholder" onClick={handleAddCountry}>Add</button>
    </div>
  )

  return ( 
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="sidebar-background" variants={sidebar} />
        <motion.ul variants={variants}>
          {continents.map(c => 
            <>
            <motion.li
            variants={variantsLi}
            key={c}>
            {c}
            <i onClick={handleAdd} className="fa fa-plus-circle" data={c}></i>
            {clickedContinent === c && input}
            {/* <ul>
            {temporaryObject.map(country => 
              <li>{country}</li>
            )}
            </ul> */}
            </motion.li>
            </>
            )}
        </motion.ul>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.div>
  );
};

export default Home;
