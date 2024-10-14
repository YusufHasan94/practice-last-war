import { Config, DropZone } from "@measured/puck";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import Title from "./components/Title/Title";
import GameCard from "./components/GameCard/GameCard";
import Grid from "./components/Grid/Grid";

type params = {
  HeadingBlock: {children: any};
  ProfCard: {Cardtitle: any,  Description:any};
  Container: {Comp: any};
  Example:{children: any};
  Title: {SectionTitle: any};
  GameCard :{imageUrl: any, cardTitle: any, cardDescription: any, badge: any};
  Example2: {items: any};
  Grid: {items: any; col: any; gap: any};
}

const Columns = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
    <DropZone zone="my-content" style={{display: "flex", justifyContent: "center"}} />
    <DropZone zone="my-content2" style={{display: "flex", justifyContent: "center"}} />
    <DropZone zone="my-content3" style={{display: "flex", justifyContent: "center"}} />
  </div>
);

const config: Config<params> = {
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
    },
    Example2: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
        },
      },
      render: ({ items }) => {
        return (
          <ul style={{color: "white", fontSize: "24px", display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gap:"20px"}}>
            {items?.map((item, i) => (
              <DropZone zone={`${item.title}`} style={{display: "flex", justifyContent: "center"}} />
            ))}
          </ul>
        );
      },
    },
    Grid: {
      fields:{
        items: {
          type: "array",
          arrayFields: {
            zone: {type: "text"},
          }
        },
        col: {
          type: "number"
        },
        gap: {
          type: "number"
        }
      },
      render :({items, col=2, gap="20px"})=> <Grid items={items} col={col} gap={gap}/>
    }
  },
};

export default config;