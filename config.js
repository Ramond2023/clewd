/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie": "",
    "CookieArray": [sessionKey=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,sessionKey=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,sessionKey=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],
    "Cookiecounter": 1,
    "CookieIndex": 0,
    "ProxyPassword": "456",
    "Ip": "127.0.0.1",
    "Port": 8444,
    "localtunnel": false,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "https://claude.ai",
    "api_rProxy": "",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": false,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 15000,
        "xmlPlot": true,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */