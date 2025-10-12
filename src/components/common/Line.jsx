
import { motion } from "framer-motion";
import React from "react";

function Line(){
    return(
          <motion.div className="h-px bg-black origin-left"
          initial={{ scaleX: 0 }}
          viewport={{ once: true }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}></motion.div>  
    )
}

export default Line;