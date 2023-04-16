async function makeInclusive(passages) {
    console.log(localStorage["api-key"]);
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage["api-key"]}`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Please convert the following passage to inclusive Speaking and Presenting Language by avoiding the use of offensive or exclusionary language: \n\n${passages}`,
        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      })
    });
  
    const { choices } = await response.json();

    const inclusivePassage = choices[0].text.trim();
    console.log(inclusivePassage);
    $("#output-area").val(inclusivePassage);
}
  

$("#title-btn").on("click",function() {
    var input = $("#input-area").val();
    makeInclusive(input);
})

$("#api-key").on("input",function() {
    var input = $("#api-key").val();
    localStorage["api-key"] = input; 
});