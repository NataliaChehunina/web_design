<?= '<?xml version="1.0" encoding="utf-8" ?>' ?>
<root>
    <maxid><?= $data["id"] ?></maxid>
    <?php foreach ($data["data"] as $value): ?>
    <text>
        <id><?= $value['id'] ?></id>
        <value><?= $value["value"] ?></value>
    </text>
    <?php endforeach ?>

    <text />

</root>