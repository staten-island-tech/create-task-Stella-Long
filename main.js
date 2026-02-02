<!DOCTYPE html>
<html>
<head>
    <title>Coin Flip with Score</title>
</head>

<body style="text-align:center; font-family:Arial;">

<h1>Coin Flip Game</h1>

<button onclick="flipCoin()">Flip Coin</button>

<h2 id="result">Result will appear here</h2>

<p>Heads: <span id="heads">0</span></p>
<p>Tails: <span id="tails">0</span></p>

<script>
    let headsCount = 0;
    let tailsCount = 0;

    function flipCoin() {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";

        document.getElementById("result").innerHTML = result;

        if (result === "Heads") {
            headsCount++;
            document.getElementById("heads").innerHTML = headsCount;
        } else {
            tailsCount++;
            document.getElementById("tails").innerHTML = tailsCount;
        }
    }
</script>

</body>
</html>
