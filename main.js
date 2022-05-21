//TODO: user specify parameters 
//TODO: picture 

const generate = document.querySelector('#generate')
generate.onclick = () => {
    $.ajax({
        url: 'https://randomuser.me/api/?password=special,upper,lower,number,8-16',
        dataType: 'json',
        success: function(data) {
            const results = data['results'][0];
            reset(results)
            addAll(results)
        }
    })
}

const addAll = (results) => {
    for (const item in results) {
        if (item == 'registered'){}
        else {
            let isNested = (item) => {
                return typeof item === 'object'
            }
            if (isNested(results[item]))
            {
                addAll(results[item])
            } else {
                addContent(item, results)
            }
        }
    } 
}

const addContent = (target, results) => {
    let targetDiv = document.querySelector(`#${target}`)
    if (targetDiv) {
        targetDiv.textContent += results[target] 
    }
}

const reset = (results) => {
    for (const item in results) {
        if (item == 'registered'){}
        else {
            let isNested = (item) => {
                return typeof item === 'object'
            }
            if (isNested(results[item]))
            {
                reset(results[item])
            } else {
                clearContent(item, results)  
            }
        }
    } 
}
const clearContent = (target, results) => {
    let targetDiv = document.querySelector(`#${target}`)
    if (targetDiv) {
        targetDiv.textContent = ''
    }
}