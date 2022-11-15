<?php
    require $_SERVER["DOCUMENT_ROOT"] . "/requirements/init.php";
    systemHead("Computer Erstellen", "configurator");
?>

<div class="app">
    <main>

        <div id="start">

        </div>

        <div id="configurator">
            <h2>Computer Setup</h2>
            <div id="error">

            </div>
            <form onsubmit="return false">
                <label for="ram">RAM auswählen:</label>
                <select id="ram">
                    <script>config("ram")</script>
                </select>

                <label for="cpu">CPU auswählen:</label>
                <select id="cpu">
                    <script>config("cpu")</script>
                </select>

                <label for="motherboard">Motherboard auswählen:</label>
                <select id="motherboard">
                    <script>config("motherboard")</script>
                </select>

                <input type="submit" onclick="setupSystem()" value="Computer Erstellen">

            </form>

        </div>

    </main>
</div>

</body>
</html>
