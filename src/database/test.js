const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //insert data into the table
  /* await saveOrphanage(db, {
    lat: "-23.2261394",
    lng: "-46.8373787",
    name: "Lar dos anjos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "959895959598898",
    images: [
      "https://images.unsplash.com/photo-1599657623118-5d00b6b40249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

      "https://images.unsplash.com/photo-1563296299-cd5525eae75d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

      "https://images.unsplash.com/photo-1552321043-21830a856e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 18h até 8h",
    open_on_weekends: "1",
  });

  //consult data of the table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages); */

  //consult only one data from the tables
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id="2"');
  console.log(orphanage);

  //remove data from the table
  //console.log(await db.run('DELETE FROM orphanages'))
});
