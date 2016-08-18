function Treasures() {
    var me = this;

    var treasures = [
        {
            text: 'SSR Super Saiyan 2 Gohan',
            cost: 777,
            enabled: true
        },
        {
            text: 'SSR Krillin',
            cost: 300,
            enabled: true
        },
        {
            text: 'SSR Chiaotzu',
            cost: 300,
            enabled: true
        },
        {
            text: 'SSR Yamcha',
            cost: 200,
            enabled: true
        },
        {
            text: 'Elder Kai',
            cost: 150,
            enabled: true
        },
        {
            text: 'Elder Kai',
            cost: 150,
            enabled: true
        },
        {
            text: 'SSR Super Saiyan Goku',
            cost: 100,
            enabled: true
        },
        {
            text: 'SSR Super Saiyan Gohan',
            cost: 100,
            enabled: true
        },
        {
            text: 'SSR Piccolo',
            cost: 100,
            enabled: true
        },
        {
            text: 'SR Ginyu (Goku)',
            cost: 50,
            enabled: true
        },
        {
            text: 'Supreme Kai Medal',
            cost: 50,
            enabled: true
        },
        {
            text: 'Supreme Kai Medal',
            cost: 50,
            enabled: true
        },
        {
            text: 'Elder Kai Medal',
            cost: 50,
            enabled: true
        },
        {
            text: 'Elder Kai Medal',
            cost: 50,
            enabled: true
        },
        {
            text: "Supreme Kai's Planet x 5",
            cost: 10,
            enabled: false
        },
        {
            text: "Gravity Chamber (150g) x 5",
            cost: 10,
            enabled: false
        },
        {
            text: "Kibito x10",
            cost: 5,
            enabled: false
        },
        {
            text: "West Kai x10",
            cost: 5,
            enabled: false
        },
        {
            text: "South Kai x10",
            cost: 5,
            enabled: false
        },
        {
            text: "East Kai x10",
            cost: 5,
            enabled: false
        },
        {
            text: "North Kai x10",
            cost: 5,
            enabled: false
        },
        {
            text: "Kami x20",
            cost: 5,
            enabled: false
        },
        {
            text: "Grand Elder Guru x20",
            cost: 5,
            enabled: false
        },
        {
            text: "Babidi x20",
            cost: 5,
            enabled: false
        },
        {
            text: "Bibidi x20",
            cost: 5,
            enabled: false
        },
        {
            text: "Korin x20",
            cost: 5,
            enabled: false
        }
    ];

    var storedTreasures = localStorage.getItem("TREASURES");
    if(storedTreasures)
        treasures = JSON.parse(storedTreasures);

    me.save = function(){
        localStorage.setItem("TREASURES", JSON.stringify(treasures));
    };

    me.setEnabled = function(index, enabled){
        if(treasures[index]){
            treasures[index].enabled = enabled == true;
            me.save();
        }
    };

    me.getAll = function(){
        return treasures;
    }
}