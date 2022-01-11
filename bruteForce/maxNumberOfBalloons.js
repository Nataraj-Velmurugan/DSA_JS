let text = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"

var maxNumberOfBalloons = function (text) {
    let ballonObj = { "b": 1, "a": 1, "l": 2, "o": 2, "n": 1 }
    let compBallonObj = {}

    for (let i = 0; i < text.length; i++) {
        compBallonObj[text[i]] ? compBallonObj[text[i]] = compBallonObj[text[i]] + 1 : compBallonObj[text[i]] = 1
    }

    let maxNum = [];
    for (let i in ballonObj) {
        if (Object.keys(compBallonObj).includes(i)) {
            if (ballonObj[i] === 1 && ballonObj[i] <= compBallonObj[i]) maxNum.push(compBallonObj[i])
            if (ballonObj[i] === 2) {
                let val = 0
                compBallonObj[i] >= 2 ? val = Math.floor(compBallonObj[i]/2) : val = 0
                maxNum.push(val)
            }
        }else {
            return 0
        }
    }
    maxNum.length === Object.keys(ballonObj).length ? maxNum.sort((a, b) => { return a - b }) : maxNum[0] = 0
    
    return maxNum[0]
};

console.log(maxNumberOfBalloons(text))