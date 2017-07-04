'use strict'

const Racebot = require('./racebot')

module.exports = function(client) {
    let racebot = new Racebot()
    
    // control commands
    client.registerCommand(['newrace', 'nr'], racebot.create_race)
    client.registerCommand(['setcountdowntime', 'setcountdowntimer'], racebot.setcountdowntime)
    client.registerCommand(['deleterace', 'dr'], racebot.race_delete)
    client.registerCommand(['keeprace', 'kr'], racebot.race_keep)
    client.registerCommand(['setgame', 'sg'], racebot.race_set_game)
    client.registerCommand(['setgoal'], racebot.race_set_goal)

    // entrant commands
    client.registerCommand(['enter', 'e'], racebot.entrant_enter)
    client.registerCommand(['unenter', 'ue'], racebot.entrant_unenter) 
    client.registerCommand(['enterready', 'er'], racebot.entrant_enterready)
    client.registerCommand(['ready', 'r'], racebot.entrant_ready)
    client.registerCommand(['unready', 'ur'], racebot.entrant_unready)
    client.registerCommand(['done', 'd'], racebot.entrant_done)
    client.registerCommand(['undone', 'ud'], racebot.entrant_undone)

    // status commands
    client.registerCommand(['entrants', 'players', 'racers'], racebot.print_entrants)
}
