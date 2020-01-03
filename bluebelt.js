const CATEGORIES = {
  fundamentals: 'fundamentals',
  standinga: 'standing attacks',
  strikingd: 'striking defenses',
  standingd: 'standing defenses',
  bear: 'bear hug + wall defenses',
  headlockd: 'headlock defenses',
  crossbodya: 'crossbody (side control) attacks',
  crossbodyd: 'crossbody (side control) defenses',
  mounting: 'mounting',
  mounta: 'mount control and attacks',
  mountd: 'mount defenses',
  backa: 'back attacks',
  backd: 'back defenses',
  guarda: 'guard attacks',
  guardd: 'guard defenses',
  guardbp: 'guard breaks and passes',
  guardds: 'guard defenses and sweeps'
}

const POSITIONS = {
  0: {
    name: 'Tie the Belt',
    category: CATEGORIES.fundamentals,
    media: false
  },
  1: {
    name: 'Break fall',
    category: CATEGORIES.fundamentals,
    media: false
  },
  2: {
    name: 'Shrimp',
    category: CATEGORIES.fundamentals,
    media: false
  },
  3: {
    name: 'Roll Forward',
    category: CATEGORIES.fundamentals,
    media: false
  },
  4: {
    name: 'Roll Backward',
    category: CATEGORIES.fundamentals,
    media: false
  },
  5: {
    name: 'Upa (Bridge)',
    category: CATEGORIES.fundamentals,
    media: false
  },
  6: {
    name: 'Teeter Totter',
    category: CATEGORIES.fundamentals,
    media: false
  },
  7: {
    name: 'Four-Points Base',
    category: CATEGORIES.fundamentals,
    media: false
  },
  8: {
    name: 'Stand up in Base',
    category: CATEGORIES.fundamentals,
    media: false
  },
  9: {
    name: 'Basic Armlock Movement',
    category: CATEGORIES.fundamentals,
    media: false
  },
  10: {
    name: 'T-Position Hip Throw',
    category: CATEGORIES.standinga,
    media: false
  },
  11: {
    name: 'T-Position Leg Throw',
    category: CATEGORIES.standinga,
    media: false
  },
  12: {
    name: 'T-Position Throw from Behind (sitting down)',
    category: CATEGORIES.standinga,
    media: false
  },
  13: {
    name: 'Standing Guillotine Choke',
    category: CATEGORIES.standinga,
    media: false
  },
  14: {
    name: 'Bajana (Double Leg Takedown)',
    category: CATEGORIES.standinga,
    media: false
  },
  15: {
    name: 'Close the Gap (to T-Position)',
    category: CATEGORIES.strikingd,
    media: false
  },
  16: {
    name: 'Round House Punch Defense (lunging punch)',
    category: CATEGORIES.strikingd,
    media: false
  },
  17: {
    name: 'Round House Punch Defense (close)',
    category: CATEGORIES.strikingd,
    media: false
  },
  18: {
    name: 'Straight Punch Defense',
    category: CATEGORIES.strikingd,
    media: false
  },
  19: {
    name: 'Front Kick Defense (absorb)',
    category: CATEGORIES.strikingd,
    media: false
  },
  20: {
    name: 'Low Kick Defense',
    category: CATEGORIES.strikingd,
    media: false
  },
  21: {
    name: 'High Kick Defense',
    category: CATEGORIES.strikingd,
    media: false
  },
  22: {
    name: 'Same Side Wrist Grab Escape',
    category: CATEGORIES.standingd,
    media: false
  },
  23: {
    name: 'Two-Hand Wrist Grab Escape',
    category: CATEGORIES.standingd,
    media: false
  },
  24: {
    name: 'One-Hand Lapel Grab Defense (Straight Arm / from side)',
    category: CATEGORIES.standingd,
    media: false
  },
  25: {
    name: 'One-Hand Lapel Grab Defense (Bent Arm)',
    category: CATEGORIES.standingd,
    media: false
  },
  26: {
    name: 'One-Hand Lapel Grab Defense (Bent Wrist)',
    category: CATEGORIES.standingd,
    media: false
  },
  27: {
    name: 'Two-Handed Choke Defense',
    category: CATEGORIES.standingd,
    media: false
  },
  28: {
    name: 'Standing Guillotine Choke Defense (Hands on Knees)',
    category: CATEGORIES.standingd,
    media: false
  },
  29: {
    name: 'Standing Guillotine Choke Defense (Buckle the Knee)',
    category: CATEGORIES.standingd,
    media: false
  },
  30: {
    name: 'Standing Rear Naked Choke Defense (throw)',
    category: CATEGORIES.standingd,
    media: false
  },
  31: {
    name: 'Standing Rear Naked Choke being dragged backwards',
    category: CATEGORIES.standingd,
    media: false
  },
  32: {
    name: 'Overhead Club Defense (close distance)',
    category: CATEGORIES.standingd,
    media: false
  },
  33: {
    name: 'Standing Hair / Ear Grab defense',
    category: CATEGORIES.standingd,
    media: false
  },
  34: {
    name: 'Rear Bear Hug Defense (Arms Pinned)',
    category: CATEGORIES.bear,
    media: false
  },
  35: {
    name: 'Rear Bear Hug Defense (Arms Free)',
    category: CATEGORIES.bear,
    media: false
  },
  36: {
    name: 'Rear Bear Hug Defense (Arms Free being picked up)',
    category: CATEGORIES.bear,
    media: false
  },
  37: {
    name: 'Front Bear Hug Defense (Arms Free)',
    category: CATEGORIES.bear,
    media: false
  },
  38: {
    name: 'Front Bear Hug Defense (Arms Pinned)',
    category: CATEGORIES.bear,
    media: false
  },
  39: {
    name: 'Neck Defense (Pinned to Wall - One Hand)',
    category: CATEGORIES.bear,
    media: false
  },
  40: {
    name: 'Headlock defense (lifting opponent)',
    category: CATEGORIES.headlockd,
    media: false
  },
  41: {
    name: 'Headlock defense (with punch defense)',
    category: CATEGORIES.headlockd,
    media: false
  },
  42: {
    name: 'Establish Cross Body Position',
    category: CATEGORIES.crossbodya,
    media: false
  },
  43: {
    name: 'Maintain Cross Side',
    category: CATEGORIES.crossbodya,
    media: false
  },
  44: {
    name: 'American Armlock from Cross Body (keylock)',
    category: CATEGORIES.crossbodya,
    media: false
  },
  45: {
    name: 'Cross Body Kimura (chicken wing)',
    category: CATEGORIES.crossbodya,
    media: false
  },
  46: {
    name: 'Cross Body Neck Crank (Pass the Leg)',
    category: CATEGORIES.crossbodya,
    media: false
  },
  47: {
    name: 'Armlock from Cross Body',
    category: CATEGORIES.crossbodya,
    media: false
  },
  48: {
    name: 'Basic Mount from Cross Body (Arm Out)',
    category: CATEGORIES.mounting,
    media: false
  },
  49: {
    name: 'Basic Mount from Cross Body (Arm In)',
    category: CATEGORIES.mounting,
    media: false
  },
  50: {
    name: 'Maintain the Mount (Swimming Through Arms)',
    category: CATEGORIES.mounta,
    media: false
  },
  51: {
    name: 'Maintain the Mount (Pulling Hands off Knees)',
    category: CATEGORIES.mounta,
    media: false
  },
  52: {
    name: 'Maintain the Mount (Pushing Opponent’s Head)',
    category: CATEGORIES.mounta,
    media: false
  },
  53: {
    name: 'Basic Cross Choke',
    category: CATEGORIES.mounta,
    media: false
  },
  54: {
    name: 'Keylock (American armlock)',
    category: CATEGORIES.mounta,
    media: false
  },
  55: {
    name: 'Armbar',
    category: CATEGORIES.mounta,
    media: false
  },
  56: {
    name: 'Maintain Back Control with Hooks',
    category: CATEGORIES.backa,
    media: false
  },
  57: {
    name: 'Collar Choke',
    category: CATEGORIES.backa,
    media: false
  },
  58: {
    name: 'Mata Leao (Rear Naked Choke)',
    category: CATEGORIES.backa,
    media: false
  },
  59: {
    name: 'Cross Choke',
    category: CATEGORIES.guarda,
    media: false
  },
  60: {
    name: 'Armlock',
    category: CATEGORIES.guarda,
    media: false
  },
  61: {
    name: 'Triangle',
    category: CATEGORIES.guarda,
    media: false
  },
  62: {
    name: 'Kimura',
    category: CATEGORIES.guarda,
    media: false
  },
  63: {
    name: 'Guillotine Choke',
    category: CATEGORIES.guarda,
    media: false
  },
  64: {
    name: 'Posture (driving hips to ground, one arm post)',
    category: CATEGORIES.guardd,
    media: false
  },
  65: {
    name: 'Guillotine choke defense',
    category: CATEGORIES.guardd,
    media: false
  },
  66: {
    name: 'Choke defense (comb the hair)',
    category: CATEGORIES.guardd,
    media: false
  },
  67: {
    name: 'Choke defense (squeeze the bread)',
    category: CATEGORIES.guardd,
    media: false
  },
  68: {
    name: 'Knee on Floor Break: Shoulder Pass',
    category: CATEGORIES.guardbp,
    media: false
  },
  69: {
    name: 'Knee on Floor Break: Hip Pass',
    category: CATEGORIES.guardbp,
    media: false
  },
  70: {
    name: 'Scissor Sweep to Mount',
    category: CATEGORIES.guardds,
    media: false
  },
  71: {
    name: 'Basic Hook Sweep',
    category: CATEGORIES.guardds,
    media: false
  },
  72: {
    name: 'Sit-up Sweep (knee to ground)',
    category: CATEGORIES.guardds,
    media: false
  },
  73: {
    name: 'Regain the Guard from Cross Body',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  74: {
    name: 'Cross Body Defense (Turn on Knees)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  75: {
    name: 'Cross Body Headlock Defense (Opponents Head Low)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  76: {
    name: 'Wrestlers Head and Arm Defense (Hips under Opponent)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  77: {
    name: 'Cross Body Headlock Defense (Make a Frame)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  78: {
    name: 'Cross Body Headlock Defense (Go to Back)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  79: {
    name: 'Cross Body Headlock Defense (Go to Knees)',
    category: CATEGORIES.crossbodyd,
    media: false
  },
  80: {
    name: 'Upa',
    category: CATEGORIES.mountd,
    media: false
  },
  80: {
    name: 'Upa with Choke Defense',
    category: CATEGORIES.mountd,
    media: false
  },
  81: {
    name: 'Mounted Punch Attack (Upa)',
    category: CATEGORIES.mountd,
    media: false
  },
  82: {
    name: 'Mount Defense (Move Away)',
    category: CATEGORIES.mountd,
    media: false
  },
  83: {
    name: 'Elbow Escape',
    category: CATEGORIES.mountd,
    media: false
  },
  84: {
    name: 'Escape from Back Control with Hooks',
    category: CATEGORIES.backd,
    media: false
  },
  85: {
    name: 'Rear Choke Escape (Finger Point)',
    category: CATEGORIES.backd,
    media: false
  },
  86: {
    name: 'Two-Handed Lapel Grab Defense',
    category: CATEGORIES.standingd,
    media: false
  },
  87: {
    name: 'Armbar Protection from Guard Defense',
    category: CATEGORIES.guardd,
    media: false
  }
}

function getPositions() {
  return POSITIONS
}