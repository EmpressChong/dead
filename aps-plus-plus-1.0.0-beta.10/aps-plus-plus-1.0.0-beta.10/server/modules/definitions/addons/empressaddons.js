// An addon is guaranteed to run only after all groups are loaded.
// This is helpful, if your group relies on all other definitions already being loaded.
// Addons that are dependant on other addons should be named something like
// "[PARENT ADDON NAME]-[EXTENSION NAME].js", to make sure that it would run after that addon ran.

const { combineStats } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');
const {statnames} = require("../constants");

module.exports = ({ Class }) => {

  // This addon is disabled by default.
  // You can also disable addons by not making them end with '.js'
  // If you want to enable, simply make the line below just not run.
  // return console.log('[empressaddons.js] Addon disabled by default');

  // Empress' Creations
  Class.bullet
  Class.reload
  Class.eliteFortress = {
    PARENT: ["elite"],
    AI: { STRAFE: true },
    GUNS: [
      {
        POSITION: [4, 6, 0.6, 7, -8, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [4, 6, 0.6, 7, 8, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [4, 6, 0.6, 7, -8, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [4, 6, 0.6, 7, 8, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [4, 6, 0.6, 7, -8, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [4, 6, 0.6, 7, 8, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: "autoswarm",
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
    ],
    TURRETS: [
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: "auraBasicGen",
      }
    ],
  };
  for (let i = 0; i < 3; i++) {
    Class.eliteFortress.GUNS.push(
      {
        POSITION: [10.5, 6, 1, 0, 0, 120 * i + 60, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, 0, 120 * i + 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    )
  }

// DELTA CRASHERS
  Class.delta = {
    PARENT: ["miniboss"],
    LABEL: "Delta Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 54,
    VARIES_IN_SIZE: true,
    VALUE: 5e5,
    BODY: {
      FOV: 1.3,
      SPEED: 0.08 * base.SPEED,
      HEALTH: 8 * base.HEALTH,
      DAMAGE: 3.5 * base.DAMAGE,
    },
  };

  Class.deltaFortressTop = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
      ["spin", { independent: true, speed: -0.005 }],
      //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [
      {
        POSITION: [4, 6, 0.7, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini,  g.doublereload,{range: 1.5}]),
          TYPE: [ "swarm", { INDEPENDENT: true } ],
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [4, 6, 0.7, 7, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini,  g.doublereload,{range: 1.5}]),
          TYPE: [ "swarm", { INDEPENDENT: true } ],
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: true,
        },
      },
      {
        POSITION: [4, 6, 0.7, 7, 0, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini,  g.doublereload,{range: 1.5}]),
          TYPE: [ "swarm", { INDEPENDENT: true } ],
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: true,
        },
      },
    ],
    TURRETS: [],
  }
  for (let i = 0; i < 3; i++) {
    Class.deltaFortressTop.GUNS.push(
      {
        POSITION: [4, 6, 0.7, 7, 7, 120*i+60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini,  g.doublereload,{range: 1.5}]),
          TYPE: [ "swarm", { INDEPENDENT: true } ],
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: true,

        },
      },
      {
        POSITION: [4, 6, 0.7, 7, -7, 120*i+60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini, g.doublereload, {range: 1.5}]),
          TYPE: [ "swarm", { INDEPENDENT: true } ],
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: true,
        },
      },
    )
  }
  Class.deltaFortress = {
    PARENT: ["delta"],
    AI: { STRAFE: true },
    GUNS: [
      {
        POSITION: [10.5, 6, 1, 0, 6, 60, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, 6, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, -6, 60, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, -6, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, -6, 180, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, -6, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, 6, 180, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, 6, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, 6, 180, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, 6, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, 6, -60, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, 6, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [10.5, 6, 1, 0, -6, -60, 0],
      },
      {
        POSITION: [3, 6, 1.7, 10.5, -6, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
    TURRETS: [
      {
        POSITION: [13, 0, 0, 0, 360, 1],
        TYPE: "deltaFortressTop",
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: "auraBasicGen",
      },
    ],
  };
  Class.holywaferbread = {
    PARENT: ["sunchip"],
    SHAPE: 0,
    COLOR: 3,
  };
  Class.holysorcerer = {
    PARENT: ["miniboss"],
    LABEL: "Holy Sorcerer",
    DANGER: 50,
    SHAPE: 0,
    COLOR: 3,
    SIZE: 26,
    MAX_CHILDREN: 150,
    FACING_TYPE: "autospin",
    VALUE: 15e6,
    BODY: {
      FOV: 0.8,
      SPEED: 0.15 * base.SPEED,
      HEALTH: 25 * base.HEALTH,
      DAMAGE: 34 * base.DAMAGE,
    },
    GUNS: Array(2).fill().map((_, i) => ({
      POSITION: [4.5, 11, 1.2, 8, 0, i * 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.mach, g.machgun, g.strong, g.triplereload, g.strong, { size: 0.8, spray: 150, speed: 2, shudder: 1.75 }]),
        TYPE: "holywaferbread",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    }))
  };

// MYSTICALS EXTENSION
  Class.bloodchip = {
    PARENT: ["sunchip"],
    SHAPE: 6
  };
  Class.apostal = {
    PARENT: ["miniboss"],
    LABEL: "Apostal",
    DANGER: 9,
    SHAPE: 6,
    COLOR: 0,
    SIZE: 26,
    MAX_CHILDREN: 15,
    FACING_TYPE: "autospin",
    VALUE: 6e5,
    BODY: {
      FOV: 0.6,
      SPEED: 0.07 * base.SPEED,
      HEALTH: 17 * base.HEALTH,
      DAMAGE: 5.5 * base.DAMAGE,
    },
    GUNS: Array(6).fill().map((_, i) => ({
      POSITION: [3.5, 8.65, 1.2, 8, 0, i * 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
        TYPE: "bloodchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    }))
  };
  Class.wormchip = {
    PARENT: ["sunchip"],
    SHAPE: 7
  };
  Class.perseus = {
    PARENT: ["miniboss"],
    LABEL: "Perseus",
    DANGER: 9,
    SHAPE: 7,
    COLOR: 30,
    SIZE: 26,
    MAX_CHILDREN: 14,
    FACING_TYPE: "autospin",
    VALUE: 6e5,
    BODY: {
      FOV: 0.6,
      SPEED: 0.06 * base.SPEED,
      HEALTH: 18 * base.HEALTH,
      DAMAGE: 6.5 * base.DAMAGE,
    },
    GUNS: Array(7).fill().map((_, i) => ({
      POSITION: [3.5, 7.7, 1.2, 8, 0, i * 51, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
        TYPE: "wormchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    }))
  };
  Class.electrochip = {
    PARENT: ["sunchip"],
    SHAPE: 8
  };
  Class.dardanos = {
    PARENT: ["miniboss"],
    LABEL: "Dardanos",
    DANGER: 9,
    SHAPE: 8,
    COLOR: 15,
    SIZE: 26,
    MAX_CHILDREN: 13,
    FACING_TYPE: "autospin",
    VALUE: 7e5,
    BODY: {
      FOV: 0.6,
      SPEED: 0.05 * base.SPEED,
      HEALTH: 19 * base.HEALTH,
      DAMAGE: 7.5 * base.DAMAGE,
    },
    GUNS: Array(8).fill().map((_, i) => ({
      POSITION: [3.5, 7, 1.2, 8, 0, i * 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
        TYPE: "electrochip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    }))
  };
  Class.nightchip = {
    PARENT: ["sunchip"],
    SHAPE: 12
  };
  Class.concordia = {
    PARENT: ["miniboss"],
    LABEL: "Concordia",
    DANGER: 12,
    SHAPE: 12,
    COLOR: 8,
    SIZE: 26,
    MAX_CHILDREN: 12,
    FACING_TYPE: "autospin",
    VALUE: 10e5,
    BODY: {
      FOV: 0.6,
      SPEED: 0.02 * base.SPEED,
      HEALTH: 21 * base.HEALTH,
      DAMAGE: 10 * base.DAMAGE,
    },
    GUNS: Array(12).fill().map((_, i) => ({
      POSITION: [3.5, 4, 1.2, 8, 0, i * 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.mega]),
        TYPE: "nightchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    }))
  };
//** Made by Umbra :3 (yes i really put this here just cause you said you will steal it)
// MYSTICALS EXTENSION PT. 2: SHINY OMEGA
  Class.shinyomegaSorcerer = {
    PARENT: ["miniboss"],
    LABEL: "Shiny Omega Sorcerer",
    DANGER: 8,
    SHAPE: 0,
    COLOR: 1,
    SIZE: 52,
    DENSITY: 2,
    MAX_CHILDREN: 100,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
      FOV: 0.5,
      SPEED: 0.09 * base.SPEED,
      HEALTH: 9 * base.HEALTH,
      DAMAGE: 4.5 * base.DAMAGE,
    },
    GUNS: Array(2).fill().map((_, i) => ({
      POSITION: [3.5, 8.65, 1.2, 8, 0, i * 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.mach, g.machgun, g.doublereload, g.strong, { size: 0.4, spray: 150, speed: 2, shudder: 1.75 }]),
        TYPE: "shinybetawaferbread",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    })),
    TURRETS: [
      {
        POSITION: [15, 0, 0, 45, 0, 1],
        TYPE: "shinyEggDummy"
      },
      {
        POSITION: [10, 0, 0, 45, 0, 1],
        TYPE: "shinyEggDummy"
      },
      {
        POSITION: [3, 0, 0, 45, 0, 1],
        TYPE: "shinyEggDummy"
      },
    ]
  };
  Class.shinySquareDummy = {
    SHAPE: 4,
    COLOR: 1,
  }
  Class.shinyomegasummoner = {
    PARENT: ["miniboss"],
    LABEL: "Shiny Omega Summoner",
    DANGER: 9,
    SHAPE: 4,
    COLOR: 1,
    SIZE: 52,
    MAX_CHILDREN: 12,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
      FOV: 0.5,
      SPEED: 0.08 * base.SPEED,
      HEALTH: 13 * base.HEALTH,
      DAMAGE: 5.5 * base.DAMAGE,
    },
    GUNS: Array(4).fill().map((_, i) => ({
      POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.destroy, g.veryfast, g.strong, { maxSpeed: 3 }, { size: 0.8 }]),
        TYPE: ["shinyomegasunchip"],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    })),
    TURRETS: [{
      POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
      TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 0, 0, 1],
      TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 3, 0, 0, 45, 0, 1],
      TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    }]
  };
  Class.shinydoritoDummy = {
    SHAPE: 3,
    COLOR: 1,
  }
  Class.shinyomegadorito = {
    PARENT: ["sunchip"],
    SHAPE: 3,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 0.5,
    },
    AI: {
      BLIND: true,
      FARMER: true,
    },
    TURRETS: [{
      POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 1.5, 0, 0, 0, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 360, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    }]
  };
  Class.shinyomegaenchantress = {
    PARENT: ["miniboss"],
    LABEL: "Shiny Omega Enchantress",
    DANGER: 11,
    SHAPE: 3.5,
    COLOR: 1,
    SIZE: 52,
    MAX_CHILDREN: 9,
    FACING_TYPE: "autospin",
    VALUE: 750000,
    BODY: {
      FOV: 0.5,
      SPEED: 0.07 * base.SPEED,
      HEALTH: 18 * base.HEALTH,
      DAMAGE: 7.5 * base.DAMAGE,
    },
    GUNS: Array(3).fill().map((_, i) => ({
      POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.destroy, g.veryfast, g.strong, g.lessreload, {maxSpeed: 3}, { size: 0.9 }]),
        TYPE: "shinyomegadorito",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    })),
    TURRETS: [{
      POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 1.5, 0, 0, 0, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 360, 0, 1],
      TYPE: ["shinydoritoDummy", { MIRROR_MASTER_ANGLE: true }]
    }]
  };
  Class.shinypentaDummy = {
    COLOR: 1,
    SHAPE: 5,
  }
  Class.shinyomegademonchip = {
    PARENT: ["sunchip"],
    SHAPE: 5,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 0.4,
    },
    AI: {
      BLIND: true,
      FARMER: true,
    },
    TURRETS: [{
      POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 1.5, 0, 0, 0, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 360, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    }]
  };
  Class.shinyomegaexorcistor = {
    PARENT: ["miniboss"],
    LABEL: "Shiny Omega Exorcistor",
    DANGER: 15,
    SHAPE: 5.5,
    COLOR: 1,
    SIZE: 52,
    MAX_CHILDREN: 5,
    FACING_TYPE: "autospin",
    VALUE: 1000000,
    BODY: {
      FOV: 0.4,
      SPEED: 0.05 * base.SPEED,
      HEALTH: 22 * base.HEALTH,
      DAMAGE: 9 * base.DAMAGE,
    },
    GUNS: Array(5).fill().map((_, i) => ({
      POSITION: [3.5, 8.65, 1.2, 8, 0, i * 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.destroy, g.veryfast, g.strong, g.one_third_reload, {maxSpeed: 3}, { size: 1.5 }]),
        TYPE: "shinyomegademonchip",
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: true,
      },
    })),
    TURRETS: [{
      POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 1.5, 0, 0, 0, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    },{
      POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 360, 0, 1],
      TYPE: ["shinypentaDummy", { MIRROR_MASTER_ANGLE: true }]
    }]
  };

// CELESTIALLY CELESTIAL
  Class.celestiallycelestial = {
    PARENT: ["celestial"],
    LABEL: "Celestiallest Celestial",
    NAME: "Celeste",
    AI: { STRAFE: true, },
    SHAPE: 0,
    COLOR: 38,
    SIZE: 50,
    BODY: {
      SPEED: 2 * base.SPEED,
    },
    TURRETS: [
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: ["freyja", { INDEPENDENT: true, }],
      },
      {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: ["nyx", { INDEPENDENT: true, }],
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: ["theia", { INDEPENDENT: true, }],
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: ["zaphkiel", { INDEPENDENT: true, }],
      },
      {
        POSITION: [3, 0, 0, 0, 360, 1],
        TYPE: ["paladin", { INDEPENDENT: true, }],
      },
    ],
  }
// MYSTICALLEST MYSTICAL
  Class.mysticallestmystical = {
    PARENT: ["miniboss"],
    LABEL: "Mysticallest Mystical",
    NAME: "Mysta",
    AI: { STRAFE: true, },
    SHAPE: 8,
    COLOR: 36,
    SIZE: 50,
    BODY: {
      SPEED: 2 * base.SPEED,
    },
    TURRETS: [
      {
        POSITION: [15, 7, 0, 45, 0, 0, 0],
        TYPE: ["sorcerer", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 90, 0, 0, 0],
        TYPE: ["summoner", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 135, 0, 0, 0],
        TYPE: ["enchantress", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 180, 0, 0, 0],
        TYPE: ["exorcistor", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 225, 0, 0, 0],
        TYPE: ["apostal", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 270, 0, 0, 0],
        TYPE: ["perseus", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 315, 0, 0, 0],
        TYPE: ["dardanos", { INDEPENDENT: true, }],
      },
      {
        POSITION: [15, 7, 0, 360, 0, 0, 0],
        TYPE: ["concordia", { INDEPENDENT: true, }],
      },
    ],
  }
  Class.rogueRammer = {
    PARENT: ["miniboss"],
    LABEL: "Rogue Rammer",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 35,
    BODY: {
      SPEED: 2 * base.SPEED,
      BULLET_HEALTH: 0.8 * base.BULLET_HEALTH,
      BULLET_DAMAGE: 0.8 * base.BULLET_DAMAGE,
      BULLET_PEN: 0.8 * base.BULLET_PEN,
      RELOAD: 0.8 * base.RELOAD,
      HEALTH: 18 * base.HEALTH,
      BODY_DAMAGE: 5 * base.BODY_DAMAGE,
    },
    TURRETS: [
      {
        POSITION: [14.5, 0, 0, 0, 360, 1],
        TYPE: ["gersemiLowerBody", { COLOR: 17, }],
      },
      {
        POSITION: [8.5, 0, 0, 0, 360, 1],
        TYPE: ["gersemiUpperBody", { COLOR: 17, }],
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: ["auraBasicGen"],
      },
    ],
  };
  for(let i = 0; i < 6; i++) {
    Class.rogueRammer.TURRETS.push(
      {
        POSITION: [7, 9, 0, 360/6*(i+0.5), 180, 0],
        TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
      },
    )
  }
// ROGUE EMPRESS
  Class.autoSmasherDrone = {
    PARENT: ["drone"],
    LABEL: "Auto-Smasher Drone",
    COLOR: 18,
    DANGER: 6,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    BODY: {
      PUSHABILITY: 0.3,
      HEALTH: 0.25*5,
      DAMAGE: 3.265/5,
      SPEED: 2,
      DENSITY: 0.1,
      RESIST: 3,
      FOV: 100,
    },
    SHAPE: 0,
    GUNS: [],
    TURRETS: [
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "smasherBody",
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["auto4gun", { INDEPENDENT: true }],
      },
    ],
  }
  Class.rogueEmpressLowerBody = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Lower Body",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    FACING_TYPE: ["spin", {speed: -0.005}],
    COLOR: 17,
    SIZE: 100,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 12,
    FOV: 10,
    MAX_CHILDREN: 12,
    GUNS: [],
  }
  for(let i = 0; i < 12; i++) {
    Class.rogueEmpressLowerBody.GUNS.push(
      {
        POSITION: [2.5, 3, -1.8, 9, 0, 360/12*i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.celeslower, g.pound, g.summoner, g.one_third_reload, g.halfreload, g.lessreload, g.one_third_reload, g.slow, g.one_third_reload, g.slow, g.halfreload, g.lessreload, g.lessreload, {size: 2.1}]),
          TYPE: ["autoSmasherDrone", {INDEPENDENT: true,}],
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
        },
      },
    )
  }
  Class.askshybridMissile = {
    PARENT: ["missile"],
    LABEL: "Auto-Smasher-Trap-Skimmer Hybrid Missile",
    HITS_OWN_TYPE: "never",
    DANGER: 6,
    COLOR: 18,
    SHAPE: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    BODY: {
      FOV: 1.05 * base.FOV,
      DENSITY: 2 * base.DENSITY,
    },
    GUNS: [
      {
        POSITION: [14, 6, 1, 0, -2, 150, 0],
        PROPERTIES: {
          AUTOFIRE: true,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ]),
          TYPE: [
            "bullet",
            {
              PERSISTS_AFTER_DEATH: true,
            },
          ],
          STAT_CALCULATOR: gunCalcNames.thruster,
        },
      },
      {
        POSITION: [14, 6, 1, 0, 2, 210, 0],
        PROPERTIES: {
          AUTOFIRE: true,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ]),
          TYPE: [
            "bullet",
            {
              PERSISTS_AFTER_DEATH: true,
            },
          ],
          STAT_CALCULATOR: gunCalcNames.thruster,
        },
      },
      {
        POSITION: [3, 7, 1, 11, -2, 90, 0],
        PROPERTIES: {
          AUTOFIRE: true,
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.halfrange,
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ]),
          TYPE: [
            "trap",
            {
              PERSISTS_AFTER_DEATH: true,
            },
          ],
        },
      },
      {
        POSITION: [11, 6, 1, 0, -2, 90, 0.5],
      },
      {
        POSITION: [3, 7, 1, 11, 2, -90, 0],
        PROPERTIES: {
          AUTOFIRE: true,
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.halfrange,
            [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ]),
          TYPE: [
            "trap",
            {
              PERSISTS_AFTER_DEATH: true,
            },
          ],
        },
      },
      {
        POSITION: [11, 6, 1, 0, 2, -90, 0.5],
      },
    ],
    TURRETS: [
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: "smasherBody",
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["auto4gun", { INDEPENDENT: true }],
      },
    ],
  }
  Class.askshybridTurret = {
    PARENT: ["genericTank"],
    LABEL: "Triple-Auto-Smasher-Trap-Skimmer Hybrid Turret",
    BODY: {
      FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster",
    ],
    GUNS: [
      {
        POSITION: [3, 10, 1.2, 15, 0, 0, 0],
      },
      {
        POSITION: [16, 18, -0.7, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.arty,
            g.skim,
            g.morespeed,
            g.one_third_reload,
            g.lessreload,
            g.halfreload,
            g.one_third_reload,
            g.halfreload,
            g.lessreload,
            {range: 3},
          ]),
          TYPE: "askshybridMissile",
        },
      },
    ],
  };
  Class.rogueEmpressBottomBody = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Bottom Body",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    FACING_TYPE: ["spin", {speed: 0.005}],
    COLOR: 17,
    SIZE: 100,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 9,
    FOV: 1,
    TURRETS: [],
  };
  for(let i = 0; i < 9; i++) {
    Class.rogueEmpressBottomBody.TURRETS.push(
      {
        POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
        TYPE: ["askshybridTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.diplomatTurret = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Diplomat Turret",
    BODY: {
      FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster",
    ],
    GUNS: [
      {
        POSITION: [18, 7, 1, 0, -6, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.triple,
            g.power,
            g.twin,
            g.halfspeed,
          ]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [18, 7, 1, 0, 6, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.triple,
            g.power,
            g.twin,
            g.halfspeed,
          ]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [21, 7, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.triple,
            g.power,
            g.twin,
            g.halfspeed,
          ]),
          TYPE: "bullet",
        },
      },
    ],
  };
  Class.rogueEmpressMiddleBody = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Middle Body",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    FACING_TYPE: ["spin", {speed: -0.005}],
    COLOR: 17,
    SIZE: 100,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 6,
    FOV: 1,
    TURRETS: [],
  };
  for(let i = 0; i < 6; i++) {
    Class.rogueEmpressMiddleBody.TURRETS.push(
      {
        POSITION: [8.5, 9, 0, 360/6*(i+0.5), 160, 0],
        TYPE: ["diplomatTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.rogueAnni = {
    PARENT: ["miniboss"],
    LABEL: "Rogue Devastator",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    FACING_TYPE: ["autospin"],
    AUTOSPIN: true,
    AUTOFIRE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    BODY: {
      FOV: 1.4,
      SPEED: 0.05 * base.SPEED,
      HEALTH: 16 * base.HEALTH,
      SHIELD: 3 * base.SHIELD,
    },
    GUNS: [
      { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy, g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy,  g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy, g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy, g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy, g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.pound, g.destroy, g.destroy, g.anni, g.halfrecoil, g.lessreload, g.basic ]), TYPE: ["bullet"], AUTOFIRE: true}},
      { POSITION: [11, 7, 0.6, 0, 0, 30, 0], PROPERTIES: { TYPE: "swarm", SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
      { POSITION: [11, 7, 0.6, 0, 0, 90, 0], PROPERTIES: { TYPE: "swarm" , SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
      { POSITION: [11, 7, 0.6, 0, 0, 150, 0], PROPERTIES: { TYPE: "swarm" , SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
      { POSITION: [11, 7, 0.6, 0, 0, 210, 0], PROPERTIES: { TYPE: "swarm" , SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
      { POSITION: [11, 7, 0.6, 0, 0, 270, 0], PROPERTIES: { TYPE: "swarm" , SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
      { POSITION: [11, 7, 0.6, 0, 0, 330, 0], PROPERTIES: { TYPE: "swarm" , SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]), STAT_CALCULATOR: gunCalcNames.swarm, AUTOFIRE: true, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
    ],
  }
  Class.rogueEmpressPillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Rogue Empress Pillbox",
    BODY: {
      SPEED: 1,
      DENSITY: 5,
    },
    DIE_AT_RANGE: false,
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: "legionaryTwin",
      },
    ],
  }
  Class.devastatorTurret = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Devastator Turret",
    BODY: {
      FOV: 10,
    },
    COLOR: 16,
    GUNS: [
      {
        POSITION: [14.5, 15.5, 1, 6, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.anni, g.morespeed, g.one_third_reload, g.lessreload, g.halfrecoil, g.halfreload]),
          TYPE: "bullet",
          LABEL: "Rogue Empress Devastator Bullet",
        },
      },
    ]
  }
  Class.alvissMinion = {
    PARENT: ["rogueCelestial"],
    NAME: "Alviss",
    SHOW_HEALTH: true,
    COLOR: 17,
    SHAPE: 9,
    TURRETS: [
      {
        /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
      },
      {
        POSITION: [14.94, 0, 0, 0, 360, 1],
        TYPE: ["alvissLowerBody"],
      },
      {
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["alvissUpperBody"],
      },
    ],
  };

  Class.rogueEmpressTopBody = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Top Body",
    SIZE: 100,
    COLOR: 17,
    FOV: 2,
    MAX_CHILDREN: 3,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 3,
    TURRETS: [],
    AUTOFIRE: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.1, }]],
    GUNS: [
      {
        POSITION: [5, 14, 1.6, 6, 0, 180, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {maxSpeed: 3}]),
          TYPE: ["rogueEmpressPillbox", {INDEPENDENT: true, AUTOFIRE: true,}],
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [5, 14, 1.6, 6, 0, -60, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {maxSpeed: 3}]),
          TYPE: ["rogueEmpressPillbox", {INDEPENDENT: true, AUTOFIRE: true,}],
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [5, 14, 1.6, 6, 0, 60, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {maxSpeed: 3}]),
          TYPE: ["rogueEmpressPillbox", {INDEPENDENT: true, AUTOFIRE: true,}],
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [9, 8, 1.6, 9, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.summoner, g.minion, g.mega, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, { SIZE: 32}]),
          TYPE: ["alviss", {INDEPENDENT: true,}],
        },
      },
      {
        POSITION: [5, 8, 1.6, 9, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.summoner, g.minion, g.mega, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, { SIZE: 32}]),
          TYPE: ["tyr", {INDEPENDENT: true,}],
        },
      },
      {
        POSITION: [5, 8, 1.6, 9, 0, 360, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.summoner, g.minion, g.mega, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, g.noreload, g.one_third_reload, g.lessreload, g.lessreload, g.halfreload, g.lessreload, { SIZE: 32}]),
          TYPE: ["fiolnir", {INDEPENDENT: true,}],
        },
      },
    ],
  }
  for(let i = 0; i < 3; i++) {
    Class.rogueEmpressTopBody.TURRETS.push(
      {
        POSITION: [16, 12, 0, 360/3*(i+0.5), 180, 0],
        TYPE: ["devastatorTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.rogueWarrior = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Warrior",
    COLOR: 18,
    CONTROLLERS: [["spin", { independent: true }]],
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    GUNS: [],
    TURRETS: [],
  };
  for(let i = 0; i < 3; i++) {
    Class.rogueWarrior.GUNS.push(
      {
        POSITION: [17, 8, 1, 0, 0, 120*i, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper, g.doublereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [13, 8, 1, 0, 0, 120*i+60, 0],
      },
      {
        POSITION: [4, 8, 1.7, 13, 0, 120*i+60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.doublereload,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    )
    Class.rogueWarrior.TURRETS.push(
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: ["auto4gun"]
      },
    )
  }
  Class.rogueEmpressBase = {
    PARENT: ["genericTank"],
    LABEL: "Rogue Empress Base",
    FACING_TYPE: "autospin",
    DANGER: 4,
    SHAPE: 12,
    COLOR: 17,
    SIZE: 150,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    BROADCAST_MESSAGE: "The Rogue Empress Has Fallen!",
    BODY: {
      SPEED: base.SPEED * 0.005,
    },
    TURRETS: [],
  }
  for(let i = 0; i < 12; i++) {
    Class.rogueEmpressBase.TURRETS.push(
      {
        POSITION: [5, 8.5, 0, 360/12*(i+0.5), 30, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.rogueEmpress = {
    PARENT: ["eternal"],
    LABEL: "Rogue Empress",
    AI: { STRAFE: true, },
    NAME: "Supernova",
    FACING_TYPE: "autospin",
    DANGER: 50, //How dangerous it is according to AI
    SHAPE: 12,
    COLOR: 17,
    SIZE: 150,
    VALUE: 1000000000,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    BROADCAST_MESSAGE: "The Rogue Empress Has Fallen!",
    BODY: {
      SPEED: base.SPEED * 0.005,
      HEALTH: base.HEALTH * 1.5,
    },
    TURRETS: [
      {
        POSITION: [15.5, 0, 0, 0, 360, 1],
        TYPE: ["rogueEmpressLowerBody"],
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["rogueEmpressBottomBody"],
      },
      {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: ["rogueEmpressMiddleBody"],
      },
      {
        POSITION: [2, 0, 0, 0, 360, 1],
        TYPE: ["rogueEmpressTopBody"],
      },
      {
        POSITION: [0.6, 0, 0, 0, 360, 1],
        TYPE: ["rogueWarrior"],
      },
    ],
  }
  for(let i = 0; i < 12; i++) {
    Class.rogueEmpress.TURRETS.push(
      {
        POSITION: [5, 8.5, 0, 360/12*(i+0.5), 30, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.rogueEmpressTier = {
    PARENT: ["menu"],
    LABEL: "Rogue Empress Tier",
    SHAPE: 12,
    COLOR: 17,
    UPGRADES_TIER_0: []
  }
// WARK
  Class.warkGun = {
    PARENT: ["genericTank"],
    LABEL: "Auto-Wark",
    BODY: {
      FOV: 2,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [16, 4, 1, 0, -3.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.auto, g.gunner, g.trap, g.power, g.slow]),
          TYPE: "trap",
        },
      },
      {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.auto, g.gunner, g.trap, g.power, g.slow]),
          TYPE: "trap",
        },
      },
    ],
  }
  Class.warkMissile = {
    PARENT: ["missile"],
    LABEL: "Auto-Wark Wark Missile",
    HITS_OWN_TYPE: "never",
    DANGER: 6,
    COLOR: 36,
    SHAPE: 0,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    BODY: {
      FOV: 1.05 * base.FOV,
      DENSITY: 2 * base.DENSITY,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, 5.5, 185, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
          AUTOFIRE: true,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, -5.5, 175, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
          AUTOFIRE: true,
        },
      },
    ],
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["warkGun", { INDEPENDENT: true }],
      },
    ],
  }
  Class.warkMissileTurret = {
    PARENT: ["genericTank"],
    LABEL: "Auto-Wark Wark Missile Turret",
    BODY: {
      FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster",
    ],
    GUNS: [
      {
        POSITION: [3, 10, 1.2, 15, 0, 0, 0],
      },
      {
        POSITION: [16, 18, -0.7, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.arty,
            g.skim,
            g.morespeed,
            g.one_third_reload,
            g.lessreload,
            g.halfreload,
            {range: 3},
          ]),
          TYPE: "warkMissile",
        },
      },
    ],
  };
  Class.warkBottomBody = {
    PARENT: ["genericTank"],
    LABEL: "Wark Bottom Body",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    FACING_TYPE: ["spin", {speed: 0.005}],
    COLOR: 36,
    SIZE: 100,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 9,
    FOV: 1,
    TURRETS: [],
  };
  for(let i = 0; i < 9; i++) {
    Class.warkBottomBody.TURRETS.push(
      {
        POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
        TYPE: ["warkMissileTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.machineGunnerWarkTurret = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gunner Wark Turret",
    STAT_NAMES: statnames.mixed,
    DANGER: 7,
    BODY: {
      FOV: 10,
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster",
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, -5.5, 0, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 5.5, 1, 0, 5.5, 0, 0],
      },
      {
        POSITION: [1.5, 6, 1.5, 13, 5.5, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [9, 5.5, 1, 0, -5.5, 0, 0],
      },
      {
        POSITION: [1.5, 6, 1.5, 13, -5.5, 0, 1.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 3, 1, 0, 5.5, 0, 0],
      },
      {
        POSITION: [0.5, 4, 1.5, 13, 5.5, 0, 2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 3, 1, 0, -5.5, 0, 0],
      },
      {
        POSITION: [0.5, 4, 1.5, 13, -5.5, 0, 2.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin,]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
  Class.warkMiddleBody = {
    LABEL: "Wark Middle Body",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 36,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
  };
  for(let i = 0; i < 7; i++) {
    Class.warkMiddleBody.TURRETS.push(
      {
        POSITION: [7, 8.5, 0, 360/7*(i+0.5), 160, 0],
        TYPE: ["machineGunnerWarkTurret", { INDEPENDENT: true, }],
      },
    )
  }
  Class.warkTopBody = {
    PARENT: ["genericTank"],
    LABEL: "Wark Top Body",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    FACING_TYPE: ["spin", {speed: 0.005}],
    COLOR: 36,
    SIZE: 100,
    SKILL_CAP: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SKILL: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
    SHAPE: 5,
    FOV: 2,
    TURRETS: [],
  };
  for(let i = 0; i < 5; i++) {
    Class.warkTopBody.TURRETS.push(
      {
        POSITION: [8, 11, 0, 360/5*(i+0.5), 160, 0],
        TYPE: ["barricadeTurret", { INDEPENDENT: true, AUTOFIRE: true,}],
      },
    )
  }
  Class.wawawarkrkrkwarkwark = {
    PARENT: ["eternal"],
    LABEL: "wkakwrwrwkarkrkwarkrwakrkkrawkrwakarkwarkrkwawakrwrkawrakwarkwarkwrkwararwkarkwrarkkwrkwarrkwa",
    NAME: "wkakwrwrwkarkrkwarkrwakrkkrawkrwakarkwarkrkwawakrwrkawrakwarkwarkwrkwararwkarkwrarkkwrkwarrkwa",
    FACING_TYPE: "autospin",
    DANGER: 1000,
    SHAPE: 24,
    AI: { STRAFE: true, },
    COLOR: 36,
    SIZE: 100,
    SKILL_CAP: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    SKILL: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    BROADCAST_MESSAGE: "A Strange Trembling...",
    TURRETS: [
      {
        POSITION: [15.5, 0, 0, 0, 360, 1],
        TYPE: ["warkBottomBody"],
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["warkMiddleBody"],
      },
      {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: ["warkTopBody"],
      },
    ],
  }
  for(let i = 0; i < 12; i++) {
    Class.wawawarkrkrkwarkwark.TURRETS.push(
      {
        POSITION: [5, 8.5, 0, 360/6*(i+0.5), 180, 0, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
      },
      {
        POSITION: [5, 8.5, 0, 360/6*(i+1), 180, 0, 1],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
      },
    )
  }
//DEV
  Class.helenasTank = {
    PARENT: ["auraBasic"],
    LABEL: "Helena's Tank",
    COLOR: 37,
    SHAPE: 12,
    BODY: {
      FOV: 2,
      DAMAGE: 100 * base.DAMAGE,
      HEALTH: 1000 * base.HEALTH,
      SPEED: 3 * base.SPEED,
      RELOAD: 3 * base.RELOAD,
      BULLET_DAMAGE: 100 * base.BULLET_DAMAGE,
    },
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
  };
  Class.helenasWark = {
    PARENT: ["genericTank"],
    LABEL: "Helena's Wark",
    STAT_NAMES: statnames.mixed,
    COLOR: 37,
    SHAPE: 12,
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, 5.5, 185, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 8, 1, 0, -5.5, 175, 0],
      },
      {
        POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
  Class.moshrav = {
    PARENT: ["overlord"],
    LABEL: "Moshrav",
    COLOR: 32,
    SIZE: 15,
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
  };
  Class.machineShot = {
    PARENT: ["genericTank"],
    LABEL: "Machine Shot",
    DANGER: 7,
    HAS_NO_RECOIL: true,
    BODY: {
    },
    GUNS: [
      {
        POSITION: [16, 8, 1, 0, -3, -30, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.triplereload, g.triplereload, g.triplereload, g.triplereload, g.triplereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [16, 8, 1, 0, 3, 30, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.triplereload, g.triplereload, g.triplereload, g.triplereload, g.triplereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 8, 1, 0, -2, -15, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.triplereload, g.triplereload, g.triplereload, g.triplereload, g.triplereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 8, 1, 0, 2, 15, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.triplereload, g.triplereload, g.triplereload, g.triplereload, g.triplereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.triplereload, g.triplereload, g.triplereload, g.triplereload, g.triplereload]),
          TYPE: "bullet",
        },
      },
    ],
  };
  Class.armageddonMenu = {
    PARENT: ["menu"],
    LABEL: "SPECIAL ARMAGEDDON TANKS",
    COLOR: 0,
    SHAPE: 0,
    UPGRADES_TIER_0: []
  };
  Class.armageddonBasic = {
    PARENT: ["genericTank"],
    LABEL: "Armageddon Basics",
    COLOR: 0,
    SHAPE: 0,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: "bullet",
          COLOR: 16,
          LABEL: "",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: false,
          AUTOFIRE: false,
          SYNCS_SKILLS: false,
          MAX_CHILDREN: 0,
          ALT_FIRE: false,
          NEGATIVE_RECOIL: false,
        },
      },
    ],
    UPGRADES_TIER_0: []
  };
  Class.armageddonTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Armageddon Trappers",
    COLOR: 0,
    SHAPE: 0,
    STAT_NAMES: statnames.trap,
    GUNS: [
      {
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: "trap",
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
    UPGRADES_TIER_0: []
  };
  Class.armageddonDroners = {
    PARENT: ["genericTank"],
    LABEL: "Armageddon Droners",
    COLOR: 0,
    SHAPE: 0,
    STAT_NAMES: statnames.drone,
    BODY: {
      FOV: base.FOV * 1.1,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 11, 1.3, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone]),
          TYPE: "drone",
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 6,
        },
      },
    ],
    UPGRADES_TIER_0: []
  };
  Class.shinyomegaMysticals = {
    PARENT: ["menu"],
    LABEL: "Shiny Omega Mysticals",
    COLOR: 1,
    SHAPE: 4,
    UPGRADES_TIER_0: []
  };
  Class.deltas = {
    PARENT: ["menu"],
    LABEL: "Deltas",
    COLOR: 5,
    SHAPE: 3.5,
    UPGRADES_TIER_0: []
  };
// ARMAGEDDON TANKS

  Class.sniperTurret = {
    PARENT: ["genericTank"],
    LABEL: "Auto Sniper Turret",
    BODY: {
      FOV: 1.2 * base.FOV,
    },
    COLOR: 16,
    GUNS: [
      {
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
          TYPE: "bullet",
        },
      },
    ],
  };
  Class.empress = {
    PARENT: ["genericTank"],
    LABEL: "Empress",
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [19, 6.5, 1, 0, -1, -17.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 6.5, 1, 0, 1, 17.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 6.5, 1, 0, -1, -137.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 6.5, 1, 0, 1, 137.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 6.5, 1, 0, -1, -257.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [19, 6.5, 1, 0, 1, 257.5, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double, g.power, g.gunner, g.weak, g.doublereload, g.mini, g.morereload]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [25, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [25, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [25, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [22, 8, 1, 0, 0, 240, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [22, 8, 1, 0, 0, 120, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
      {
        POSITION: [22, 8, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: "bullet",
        },
      },
    ],
    TURRETS: [
      {
        POSITION: [11, 8, 0, 60, 180, 0],
        TYPE: ["sniperTurret", { INDEPENDENT: true, }],
      },
      {
        POSITION: [11, 8, 0, 180, 180, 0],
        TYPE: ["sniperTurret", { INDEPENDENT: true, }],
      },
      {
        POSITION: [11, 8, 0, -60, 180, 0],
        TYPE: ["sniperTurret", { INDEPENDENT: true, }],
      },
    ],
  };
  exports.sanctuary = {
    PARENT: ["dominator"],
    LABEL: "Sanctuary",
    FACING_TYPE: "autospin",
    CONTROLLERS: ["alwaysFire"],
    GUNS: [],
  };
  for(let i = 0; i < 12; i++) {
    Class.sanctuary.GUNS.push(
      {
        POSITION: [4, 3.75, 1, 360/12*(i+0.5), 0, 0, 0],
      },
    )
    Class.sanctuary.GUNS.push(
      {
        POSITION: [5, 8.5, 0, 360/12*(i+0.5), 0, 0, 0],
        PROPERTIES: {
          TYPE: ["trap"],
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator])
        },
      },
    )
  }

  Class.bosses.UPGRADES_TIER_0.push("shinyomegaMysticals");
  Class.bosses.UPGRADES_TIER_0.push("rogueEmpressTier");
  Class.bosses.UPGRADES_TIER_0.push("deltas");
  Class.rogues.UPGRADES_TIER_0.push("rogueEmpress");
  Class.eternals.UPGRADES_TIER_0.push("rogueEmpress");
  Class.tanks.UPGRADES_TIER_0.push("armageddonMenu");
  Class.deltas.UPGRADES_TIER_0.push("deltaFortress");
  Class.armageddonMenu.UPGRADES_TIER_0.push("armageddonBasic", "armageddonTrapper", "armageddonDroners");
  Class.armageddonBasic.UPGRADES_TIER_0.push("empress", "vanquisher")
  Class.rogueEmpressTier.UPGRADES_TIER_0.push("rogueEmpress", "rogueEmpressBase", "rogueEmpressLowerBody", "rogueEmpressBottomBody", "rogueEmpressMiddleBody", "rogueEmpressTopBody", "rogueWarrior", "diplomatTurret", "askshybridMissile", "askshybridTurret", "autoSmasherDrone");
  Class.shinyomegaMysticals.UPGRADES_TIER_0.push("shinyomegaSorcerer", "shinyomegasummoner", "shinyomegaenchantress", "shinyomegaexorcistor");


  console.log("[Empress' (Umbra's) Addons] loaded");
};