(() => {
  async function eS(sT) {
    const ls = sT
    main = document.querySelector("#main")
    tA = main.querySelector(`div[contenteditable="true"]`)

    if (!tA) throw new Error("Não há uma conversa aberta")

    pt = parseInt(prompt("QUANTIDADE DE SPAM: "))

    for (let i = 0; i <= pt; i++) {
      console.log(i)
      tA.focus();
      document.execCommand("insertText", false, sT)
      tA.dispatchEvent(new Event("change", { bubbles: true }))

      setTimeout(() => {
        (
          main.querySelector(`[data-testid="send"]`) ||
          main.querySelector(`[data-icon="send"]`)
        ).click()
      }, 100)

      if (ls.indexOf(i) !== ls.length - 1)
        await new Promise((resolve) => setTimeout(resolve, 101))
    }

    return ls.length
  }

  document
    .querySelector('button[title="Anexar"]')
    .addEventListener("click", function () {
      document.querySelector('button[title="Anexar"]').innerHTML = `BOMB`

      eS(prompt("WT?: "))
        .then((e) => console.log(`Código finalizado.`))
        .catch(console.error)
    })
})()
