using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dta.Marketplace.Insights.Api.Models;

namespace Dta.Marketplace.Insights.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public dynamic Get()
        {
            var list = new List<WhoIsBuying>() {
                new WhoIsBuying {
                    Label = "Corporate Commonwealth Entity",
                    Value = 43
                },
                new WhoIsBuying {
                    Label = "Non Corporate Commonwealth Entity",
                    Value = 94
                },
                new WhoIsBuying {
                    Label = "State / Territory",
                    Value = 64
                },
                new WhoIsBuying {
                    Label = "Local",
                    Value = 74
                },
                new WhoIsBuying {
                    Label = "Other",
                    Value = 13
                }
            };
            var numberOfEntities = 288;
            var commonwealthPercentage = 48;
            return new {
                WhoIsBuyingDescription = $"{numberOfEntities} entities have registered, {commonwealthPercentage}% of which are Commonwealth government",
                WhoIsBuying = list
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
