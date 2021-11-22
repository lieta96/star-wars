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
      show:true
    },
    series: [
      {
        type: 'treemap',
        data: data.results.map(films=>( 
          {
            name:`${films.title}`,
            value: films.characters.length
          }))
      }
    ]
  };
  return echartsData;
}

export default getConfig;

