var EnemyFactory = function () {
    this.types = {
        EnemyWithGun: "EnemyWithGun",
        EnemyWithSword: "EnemyWithSword",
        EnemyWithJetPack: "EnemyWithJetPack"
    };

    this.create = function (pType) {
        var enemy;
        switch (pType) {
            case this.types.EnemyWithGun:
                enemy = new EnemyWithGun();
                break;
            case this.types.EnemyWithSword:
                enemy = new EnemyWithSword();
                break;
            case this.types.EnemyWithJetPack:
                enemy = new EnemyWithJetPack();
                break;
            default:
                break;
        }

        enemy = enemy || {};
        enemy.type = pType;

        enemy.attack = function () {
            console.log(this.type + " uses " + this.equipment);
        };

        return enemy;
    };
}

var EnemyWithGun = function () {
    this.equipment = "Gun";
}

var EnemyWithSword = function () {
    this.equipment = "Sword";
}

var EnemyWithJetPack = function () {
    this.equipment = "JetPack";
}

function main() {
    var enemies = [];
    var factory = new EnemyFactory();

    enemies.push(factory.create(factory.types.EnemyWithGun));
    enemies.push(factory.create(factory.types.EnemyWithSword));
    enemies.push(factory.create(factory.types.EnemyWithJetPack));

    enemies.forEach(function (enemy) {
        enemy.attack();
    }, this);
}