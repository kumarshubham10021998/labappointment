import React, { useRef, useEffect, useState } from "react";
import "./ScrollTextBlock.css";

const ScrollTextBlock = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    const updateScrollLength = () => {
      const contentWidth = contentRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollLength(contentWidth - viewportWidth);
    };

    updateScrollLength();
    window.addEventListener("resize", updateScrollLength);
    return () => window.removeEventListener("resize", updateScrollLength);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const sticky = stickyRef.current;
      const content = contentRef.current;

      const scrollTop = window.scrollY;
      const offsetTop = container.offsetTop;
      const maxScroll = scrollLength;

      if (scrollTop >= offsetTop && scrollTop <= offsetTop + maxScroll) {
        const horizontalScroll = scrollTop - offsetTop;
        content.style.transform = `translateX(-${horizontalScroll}px)`;
        sticky.style.position = "fixed";
        sticky.style.top = "0";
      } else if (scrollTop < offsetTop) {
        content.style.transform = "translateX(0)";
        sticky.style.position = "relative";
      } else {
        content.style.transform = `translateX(-${scrollLength}px)`;
        sticky.style.position = "relative";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollLength]);

  return (
    <div
      ref={containerRef}
      className="scroll-section"
      style={{ height: `${scrollLength + window.innerHeight}px` }}
    >
      <div ref={stickyRef} className="sticky-container">
        <div ref={contentRef} className="scroll-content">
          <div className="block">Scroll</div>
          <div className="block">Text</div>
          <div className="block">Goes</div>
          <div className="block">Left</div>
          <div className="block">Then</div>
          <div className="block">Down</div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTextBlock;
