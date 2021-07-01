const db = require("../api/models");
const controller = require("./users_controllers_test");

const run = async () => {
    const tut1 = await controller.createUser({
        name: "Tut#1",
        email: "Tut#1 Email",
        mobile: "Tut#1 Mobile"
    });

    const tut2 = await controller.createUser({
        name: "Tut#2",
        email: "Tut#2 Email",
        mobile: "Tut#2 Mobile"
    });

    const comment1 = await controller.createBook(tut1.id, {
        title: "bezkoder #1",
        description: "Good job! #1",
    });

    await controller.createBook(tut1.id, {
        title: "bezkoder #2",
        description: "Good job! #2",
    });

    const comment2 = await controller.createBook(tut2.id, {
        title: "bezkoder #3",
        description: "Good job! #3",
    });

    await controller.createBook(tut2.id, {
        title: "bezkoder #4",
        description: "Good job! #4",
    });

    const tut1Data = await controller.findUserById(tut1.id);
    console.log(
        ">> Tutorial id=" + tut1Data.id,
        JSON.stringify(tut1Data, null, 2)
    );

    const tut2Data = await controller.findUserById(tut2.id);
    console.log(
        ">> Tutorial id=" + tut2Data.id,
        JSON.stringify(tut2Data, null, 2)
    );

    const comment1Data = await controller.findBookById(comment1.id);
    console.log(
        ">> Comment id=" + comment1.id,
        JSON.stringify(comment1Data, null, 2)
    );

    const comment2Data = await controller.findBookById(comment2.id);
    console.log(
        ">> Comment id=" + comment2.id,
        JSON.stringify(comment2Data, null, 2)
    );

    const tutorials = await controller.findAll();
    console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
};

// Test
// db.sequelize.sync();
// ceci permettra de tester tout nos controller en remettant toute notre DB à zéro
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});
