/*
        // call stack theo co che FIFO, neu 1 tac vu nao chua hoan thanh, cac tac vu khac bi block
        /--- Call Stack ---/                    /--- Event Table ---/
                                                 wait for next 5 seconds         showPerimeter()

        --- after 5 seconds ---                 /--- Event Queue ---/
        console.log('Initializing...');         showPerimeter -> move to call stack
        console.log('Getting Started...');
        setTimeout(showPerimeter, 5000);
        console.log('Ending program...');
        console.log('Exiting...');
        start()

        /-- Call Stack ---/
        perimeter(2, 2)                     
        console.log(perimeter(2, 2));
        showPerimeter()

        Event loop se lien tuc check Call stack, Event Queue xem co empty hay khong -> event loop
        khi callback o trong Event Table, khong co bat ky doan code nao bi block

*/

const perimeter = function(a, b) {
    return 2 * (a + b);
}

const showPerimeter = function() {
    console.log(perimeter(2, 2));
}

const start = function() {
    console.log('Initializing...');
    console.log('Getting Started...');
    setTimeout(showPerimeter, 5000);
    console.log('Ending program...');
    console.log('Exiting...');
}

start()