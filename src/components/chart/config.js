import { Breadcrumb } from "react-bootstrap";

function getConfig({data}) {

  const echartsData = {
    color:['#c4c6b4', '#72787d', '#1cc2ee', '#9ba0a8', '#3f3639', '#4b596f'],
    title: {
      text: 'Number or characters',
      left: 'center',
      textStyle:{
        color:'#fff',
        fontSize:25
      }
    },
    tooltip:{
      show:true,
      backgroundColor: '#fff',
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
    },
    series: [
      {
        type: 'treemap',
        data: data.results.map(films=>( 
          {
            name:`${films.title}`,
            value: films.characters.length
          })),
          breadcrumb:{
            show:true,
            itemStyle:{
              color: '#fff',
              textStyle:{
                color:'#000'
              }
            }
          }
      }
    ]
  };
  return echartsData;
}

export default getConfig;

