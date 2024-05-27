document.querySelectorAll("a[href^='mailto:']").forEach(MailLink => {
   MailLink.addEventListener("click", Event => {
        Event.preventDefault();
        navigator.clipboard.writeText(Event.target.innerText);
        alert("Copied!");
    });
});