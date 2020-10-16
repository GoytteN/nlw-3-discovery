const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  
  // Insert datas on table
 await saveOrphanage(db, {
  lat: "-19.9123386",
  lng:"-44.1241357",
  name: "Lar de carinho",
  about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio dolore mollitia ratione fugiat magni sequi corporis enim, perspiciatis deserunt quis tempore aliquid saepe, deleniti voluptate eos voluptatum praesentium recusandae quia!",
  whatsapp: "13121110",
  images: [
    "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    "https://images.unsplash.com/photo-1562790519-76a1627de754?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  ].toString(),
  instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  opening_hours: "Horários de visitas das 18h até 8h",
  open_on_weekends: "0"
})
  
  // Consult data on table
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  //  console.log(selectedOrphanages)

 // Consult only one orphanage, by id
 const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
//  console.log(orphanage)

//  // Delete data on table
//  console.log(await db.run("DELETE FROM orphanages WHERE id='4'"))
})