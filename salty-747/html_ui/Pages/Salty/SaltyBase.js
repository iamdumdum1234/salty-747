class SaltyBase {
    constructor() {
        this.irs = new SaltyIRS();
        this.pilots = new SaltyPilots();
        this.jettison = new SaltyJettison();
    }
    init() {
        this.irs.init();
        this.pilots.init();
        this.jettison.init();
    }
    update(electricityIsAvail) {
        // alternatively may be able to use this.isElectricityAvailable() SimVar.GetSimVarValue("CIRCUIT GENERAL PANEL ON", "Bool") to get electricity status
        if (electricityIsAvail) SimVar.SetSimVarValue("L:ELEC_DEBUG", "Enum", 92);
        else SimVar.SetSimVarValue("L:ELEC_DEBUG", "Enum", 22);
        this.irs.update(electricityIsAvail);
        this.jettison.update();
    }
}
