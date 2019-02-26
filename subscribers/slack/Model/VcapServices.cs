
// <auto-generated />
//
// To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
//
//    using Dta.Marketplace.Subscribers.Slack.Model;
//
//    var vcapServices = VcapServices.FromJson(jsonString);

using System;
using System.Collections.Generic;

using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Dta.Marketplace.Subscribers.Slack.Model {

    public partial class VcapServices {
        [JsonProperty("user-provided")]
        public List<UserProvided> UserProvided { get; set; }
    }

    public partial class UserProvided {
        [JsonProperty("label")]
        public string Label { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("tags")]
        public List<object> Tags { get; set; }

        [JsonProperty("instance_name")]
        public string InstanceName { get; set; }

        [JsonProperty("binding_name")]
        public object BindingName { get; set; }

        [JsonProperty("credentials")]
        public Credentials Credentials { get; set; }

        [JsonProperty("syslog_drain_url")]
        public string SyslogDrainUrl { get; set; }

        [JsonProperty("volume_mounts")]
        public List<object> VolumeMounts { get; set; }
    }

    public partial class Credentials {
        [JsonProperty("AWS_SQS_ACCESS_KEY_ID")]
        public string AwsSqsAccessKeyId { get; set; }

        [JsonProperty("AWS_SQS_QUEUE_URL")]
        public string AwsSqsQueueUrl { get; set; }

        [JsonProperty("AWS_SQS_REGION")]
        public string AwsSqsRegion { get; set; }

        [JsonProperty("AWS_SQS_SECRET_ACCESS_KEY")]
        public string AwsSqsSecretAccessKey { get; set; }

        [JsonProperty("BUYER_SLACK_URL")]
        public string BuyerSlackUrl { get; set; }

        [JsonProperty("SUPPLIER_SLACK_URL")]
        public string SupplierSlackUrl { get; set; }

        [JsonProperty("USER_SLACK_URL")]
        public string UserSlackUrl { get; set; }

        [JsonProperty("WORK_INTERVAL_IN_SECONDS")]
        public int WorkIntervalInSeconds { get; set; }

        [JsonProperty("AWS_SQS_LONG_POLL_TIME_IN_SECONDS")]
        public int AwsSqsLongPollTimeInSeconds { get; set; }

        [JsonProperty("SENTRY_DSN")]
        public int SentryDsn { get; set; }
    }

    public partial class VcapServices {
        public static VcapServices FromJson(string json) => JsonConvert.DeserializeObject<VcapServices>(json, Converter.Settings);
    }
}
