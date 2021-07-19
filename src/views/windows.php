<main id="windows">
    <!-- Desktop -->
    <section id="desktop">
        <div id="windw" class="gui window">
            <div class="winbar">
                <img src="public/assets/windows/ie.png" alt="ie">    
                <span>Internet Browser</span>
                <div class="winbtn">
                    <a href="javascript:close()">
                        <img class="gui btn" src="public/assets/windows/close.png" alt="close" />
                    </a>
                </div>
            </div>
            <div class="gui inverse inner">
                <iframe id="browser" src="archive" frameborder="0" title="Kike Explorer"></iframe>
            </div>
        </div>
    </section>
    <
    <!-- System tray -->
    <footer class="gui">
        <a id="start" class="gui btn" href="javascript:bsod()">
            <img src="public/assets/windows/win.ico" alt="Windows" />
            <span>Start</span>
        </a>
        <div class="vl"></div>
        <a id="browser-tsk" class="gui btn task" href="javascript:showhide()">
            <span>Internet Browser</span>
        </a>

        <div class="vl rlt"></div>
        <div id="tray" class="gui inverse">
            <span><?=date("Y-m-d")?></span>
        </div>
    </footer>

    <!-- BSOD -->
    <div id="bsod">
        <span class="title">Kike WTF</span>
        <p>
            <br />
            An error has ocurred. To continue:
            <br /><br />
            Reload the page, or:
            <br /><br />
            Contact Kike immediately. If you do this, you will never regret such a decision.
            <br /><br />
            Error : DE : ADBE : EFC0FFEE
            <br /><br />
        </p>
        <span>Try pressing any key to continue &nbsp;<div class="blink">_</div></span>
    </div>
</main>

<script type="text/javascript">
"use strict";
function bsod() { document.getElementById("bsod").style.display = "flex" }
function show(url) {
    document.getElementById("browser").src = url;
    document.getElementById("windows").classList.add("browser");
    document.getElementById("browser-tsk").classList.add("inverse");
}
function close() {
    document.getElementById("windows").classList.remove("browser");
    document.getElementById("browser-tsk").classList.remove("inverse");
}
function showhide() {
    document.getElementById("windows").classList.toggle("browser");
    document.getElementById("browser-tsk").classList.toggle("inverse");
}
[
    ["frm", "Recycle Bin", "bin", "https://web.archive.org/web/*/kike.wtf"],
    ["lnk", "Medium", "notepad", "https://kikefontan.medium.com"],
    ["lnk", "GitHub", "computer", "https://github.com/cosasdepuma"],
    ["lnk", "LinkedIn", "people", "https://linkedin.com/in/kikefontan"],
    ["lnk", "CTFtime", "clock", "https://ctftime.org/user/97334"],
    ["lnk", "GHDB", "warnfiles", "https://www.exploit-db.com/google-hacking-database?author=10985"],
    ["frm", "TryHackMe", "tools", "https://tryhackme.com/p/KikeWTF"],
    ["lnk", "HackTheBox", "hardware", "https://www.hackthebox.eu/profile/9499"],
    ["frm", "Archive", "cam", "archive"],
    ["lnk", "eMail", "mail", "mailto:hola@kike.wtf"],
    ["lnk", "Credly", "cert", "https://www.credly.com/users/kikefontan"],
].forEach(function (ico) {
    var el = document.createElement("a");
    el.setAttribute("ico", ico[1]);
    if(ico[0] === "lnk") {
        el.setAttribute("href", ico[3]);
        el.setAttribute("rel", "noopener noreferrer");
        if(ico[3].startsWith("http")) el.setAttribute("target", "_blank");
    } else if(ico[0] === "frm") {
        el.setAttribute("href", `javascript:show("${ico[3]}")`);
    }
    var ic = document.createElement("img");
    ic.setAttribute("alt", "noico");
    ic.setAttribute("src", `public/assets/windows/${ico[2]}.png`);
    el.appendChild(ic);
    document.getElementById("desktop").appendChild(el);
});
document.addEventListener('keypress', function(e) {
    event.preventDefault();
    document.getElementById("bsod").style.display = "";
});
</script>