import { Config, DropZone } from "@measured/puck";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Title from "./components/Title/Title";
import GameCard from "./components/GameCard/GameCard";

type params = {
  HeadingBlock: {children: any};
  ProfCard: {Cardtitle: any,  Description:any};
  Container: {Comp: any};
}

const Columns = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
    <DropZone zone="my-content" style={{display: "flex", justifyContent: "center"}} />
    <DropZone zone="my-content2" style={{display: "flex", justifyContent: "center"}} />
    <DropZone zone="my-content3" style={{display: "flex", justifyContent: "center"}} />
  </div>
);

const config = {
  components: {
    Example: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: () => {
        return (
          <div>
             <Columns />
          </div>
        );
      },
    },
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <h1>{children}</h1>;
      },
    },
    ProfCard: {
      fields: {
        Cardtitle: {type: "text"},
        Description: {type: "textarea"}
      },
      defaultProps: {
        Cardtitle: "Card title",
        Description :"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      render : ({Cardtitle, Description})=>{
        return(
          <BusinessCard cardtitle={Cardtitle} description={Description}/>
        )
      }
    },
    Container: {
      fields:{
        Comp: {type: "text"}
      },
      defaultProps:{
        Comp: "textarea"
      },
      render: ({Comp})=>{
        return(
          <div>
            {Comp}
          </div>
        )
      }
    },
    Title: {
      fields: {
        SectionTitle: {type: "text"}
      },
      defaultProps:{
        SectionTitle: "Title"
      },
      render: ({SectionTitle="Section"})=>{
        return <Title title={SectionTitle}/>
      }
    },
    GameCard: {
      fields: {
        imageUrl: {type: "textarea"},
        cardTitle: {type: "text"},
        cardDescription: {type: "textarea"},
        badge: {type: "text"}

      },
      defaultProps:{
        imageUrl: "url",
        cardTitle: "title",
        cardDescription: "decription",
        badge: "badge"
      },
      render :({imageUrl, cardTitle, cardDescription, badge})=>{
        return <GameCard imageUrl={imageUrl} cardTitle={cardTitle} cardDescription={cardDescription} badge={badge} />
      }
    }
  },
};

export default config;