"use client";

import PortableTextComponent from "../ui/PortableTextComponent";

const MainContent = ({ mainData }) => {
  return (
    <main>
      <section>
        {mainData.map((item) => (
          <div>
            <PortableTextComponent content={item.docuContent} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainContent;
