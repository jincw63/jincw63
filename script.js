function pickNumbers() {
    let numbers = [];
    while (numbers.length < 5) {
        let randNum = Math.floor(Math.random() * 25) + 1;
        if (!numbers.includes(randNum)) {
            numbers.push(randNum);
        }
    }

    // SweetAlert2 모달 출력
    Swal.fire({
        title: "청소 당번 🎉",
        text: `이번 청소 당번은: ${numbers.join(", ")}`,
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#007BFF",
        backdrop: `
            rgba(0, 123, 255, 0.4)
            url("https://media.giphy.com/media/l3vR3z8j5JjrhjwrG/giphy.gif")
            center / cover
        `
    });
}
