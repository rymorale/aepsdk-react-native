"use strict";
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
* class represents a decision scope used to fetch personalized offers from the Experience Edge network.
*/
class DecisionScope {
    constructor(name, activityId, placementId, itemCount) {
        if (name && name.trim()) {
            this.name = name;
        }
        else {
            const decisionScopeObject = {};
            decisionScopeObject['activityId'] = activityId;
            decisionScopeObject['placementId'] = placementId;
            decisionScopeObject['itemCount'] = itemCount;
            this.name = Buffer.from(JSON.stringify(decisionScopeObject)).toString("base64");
        }
    }
    /**
    * Gets the name of this scope
    * @return {string} - The name of the scope
    */
    getName() {
        return this.name;
    }
}
;
exports.default = DecisionScope;
//# sourceMappingURL=DecisionScope.js.map