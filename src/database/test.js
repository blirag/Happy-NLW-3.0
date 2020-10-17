const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-23.6344531",
        lng: "-46.5776764",
        name: "Lar das meninas",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9999999",
        images: [
            "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595295410103-402cb7cb0254?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia pra dar",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "1"
    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})