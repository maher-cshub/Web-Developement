baseURL = "https://mp3quran.net/api/v3"
const datafetched = []
const languages = document.getElementById("languages")

let get_main_results = async(baseURL)=>{
    try {
        const fetch_response =  await fetch(`${baseURL}/languages`,{method: "GET"})    
        const data = await fetch_response.json()
        console.log(data)
        let html = ""
        data["language"].forEach(element => {
            datafetched.push(element)
            html += `
                <li>
                    <button class="language" id="language">${element["language"]}</button>
                </li>
            `
        });
        languages.innerHTML = html
    } catch (error) {
        console.log("error")
    }
}

get_main_results(baseURL)

