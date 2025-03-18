export default [
    {
        "code": "PlatformOverview",
        "name": "平台概况",
        "owner": "iot",
        "url": "/kh_overview",
        "icon": "icon-pingtaigaikuang",
        "sortIndex": 1,
        "permissions": [],
        "children": [
            {
                "code": "device/DashBoard",
                "name": "设备统计",
                "owner": "iot",
                "url": "/kh_overview/device-count",
                "icon": "icon-keshihua",
                "sortIndex": 1,
                "showPage": [
                    "dashboard",
                    "device-product",
                    "device-instance"
                ],
                "permissions": [
                    {
                        "permission": "device-product",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "dashboard",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "device-instance",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "geo-manager",
                        "actions": [
                            "find-geo"
                        ]
                    }
                ],
                "cardData": "{\"size\":\"12x1\",\"content\":[{\"componentName\":\"StatisticGroup\",\"colSpan\":12,\"title\":\"接入\",\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/metric/all\",\"params\":{\"method\":\"POST\",\"data\":{}},\"resDataKey\":\"result.upload\",\"valueType\":\"object\"},\"items\":[{\"title\":\"超级设备\",\"valueKey\":\"superDeviceNumber\"},{\"title\":\"设备\",\"valueKey\":\"deviceNumber\"},{\"title\":\"消息量\",\"valueKey\":\"messageNumber\"}]},{\"componentName\":\"StatisticGroup\",\"colSpan\":12,\"title\":\"上传\",\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/metric/all\",\"params\":{\"method\":\"POST\",\"data\":{}},\"resDataKey\":\"result.access\",\"valueType\":\"object\"},\"items\":[{\"title\":\"超级设备\",\"value\":\"16\",\"valueKey\":\"superDeviceNumber\"},{\"title\":\"设备\",\"value\":\"16\",\"valueKey\":\"deviceNumber\"},{\"title\":\"消息量\",\"value\":\"16\",\"valueKey\":\"messageNumber\"}]}]}"
            },
            {
                "code": "link/DashBoard",
                "name": "平台资源统计",
                "owner": "iot",
                "sortIndex": 2,
                "url": "/kh_overview/link-count",
                "icon": "icon-keshihua",
                "showPage": [
                    "dashboard",
                    "network-config"
                ],
                "permissions": [
                    {
                        "permission": "network-config",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "dashboard",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "cardData": "{\"size\":\"12x1\",\"content\":[{\"componentName\":\"ChartDashboard\",\"colSpan\":24,\"title\":\"CPU使用率\",\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/dashboard/cluster/nodes\",\"params\":{\"method\":\"GET\",\"params\":{}},\"resDataKey\":\"result.0.id\"}}]}"
            },
            {
                "name": "级联统计",
                "code": "cascade/DashBoard",
                "owner": "iot",
                "sortIndex": 3,
                "url": "/cascade-center/cascadeStatistics",
                "icon": "icon-keshihua",
                "showPage": [
                    "dashboard",
                    "cascade-metric"
                ],
                "permissions": [
                    {
                        "permission": "dashboard",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "cascade-metric",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "buttons": [],
                "cardData": "{\"size\":\"12x1\",\"content\":[{\"componentName\":\"StatisticGroup\",\"colSpan\":12,\"title\":\"接入\",\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/metric/all\",\"params\":{\"method\":\"POST\",\"data\":{}},\"resDataKey\":\"result.upload\",\"valueType\":\"object\"},\"items\":[{\"title\":\"超级设备\",\"valueKey\":\"superDeviceNumber\"},{\"title\":\"设备\",\"valueKey\":\"deviceNumber\"},{\"title\":\"消息量\",\"valueKey\":\"messageNumber\"}]},{\"componentName\":\"StatisticGroup\",\"colSpan\":12,\"title\":\"上传\",\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/metric/all\",\"params\":{\"method\":\"POST\",\"data\":{}},\"resDataKey\":\"result.access\",\"valueType\":\"object\"},\"items\":[{\"title\":\"超级设备\",\"value\":\"16\",\"valueKey\":\"superDeviceNumber\"},{\"title\":\"设备\",\"value\":\"16\",\"valueKey\":\"deviceNumber\"},{\"title\":\"消息量\",\"value\":\"16\",\"valueKey\":\"messageNumber\"}]}]}"
            },
            {
                "code": "rule-engine/DashBoard",
                "name": "告警统计",
                "owner": "iot",
                "sortIndex": 4,
                "url": "/kh_overview/alarm-count",
                "icon": "icon-keshihua",
                "showPage": [
                    "dashboard",
                    "alarm-record",
                    "alarm-config"
                ],
                "permissions": [
                    {
                        "permission": "dashboard",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "alarm-config",
                        "actions": [
                            "query"
                        ]
                    },
                    {
                        "permission": "alarm-record",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "buttons": []
            },
            {
                "code": "media/DashBoard",
                "name": "视频统计",
                "owner": "iot",
                "sortIndex": 5,
                "url": "/kh_overview/video-count",
                "icon": "icon-keshihua",
                "permissions": [
                    {
                        "permission": "media-device",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "buttons": [],
                "showPage": [
                    "dashboard",
                    "media-device"
                ],
                "cardData": "{\"size\":\"12x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":8,\"title\":\"录像数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/media/record/file/agg\",\"params\":{\"method\":\"GET\",\"params\":{}},\"resDataKey\":\"result.total\"}},{\"componentName\":\"Statistic\",\"colSpan\":8,\"title\":\"播放中数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/media/channel/playing/agg\",\"params\":{\"method\":\"GET\",\"params\":{}},\"resDataKey\":\"result.playingTotal\"}},{\"componentName\":\"Statistic\",\"colSpan\":8,\"title\":\"通道数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/media/channel/_count\",\"params\":{\"method\":\"POST\",\"data\":{}},\"resDataKey\":\"result\"}}]}"
            }
        ]
    },
    {
        "code": "access",
        "name": "设备接入",
        "sortIndex": 2,
        "owner": "iot",
        "url": "/kh_access",
        "icon": "icon-shebei",
        "children": [
            {
                "code": "device",
                "name": "设备管理",
                "sortIndex": 1,
                "owner": "iot",
                "url": "/kh_access/device",
                "icon": "icon-shebei",
                "children": [
                    {
                        "code": "device/Instance",
                        "name": "设备",
                        "owner": "iot",
                        "url": "/kh_access/device/Instance",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "accessSupport": "support",
                        "assetType": "device",
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "protocol-supports",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-api",
                                "actions": [
                                    "query-device-events"
                                ]
                            },
                            {
                                "permission": "things-collector",
                                "actions": [
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "edge-operations",
                                "actions": [
                                    "invoke"
                                ]
                            },
                            {
                                "permission": "device-gateway",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "standard-model",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "access-protocol-plugin",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "media-device",
                                "actions": [
                                    "stop",
                                    "ptz",
                                    "record",
                                    "query",
                                    "start",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "retention-message",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "export"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "import",
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "visualization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-opt-api",
                                        "actions": [
                                            "read-property",
                                            "invoke-function",
                                            "write-property"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dictionary",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dashboard",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "enable",
                                            "disable",
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "device/Product",
                        "name": "产品",
                        "owner": "iot",
                        "url": "/kh_access/device/Product",
                        "icon": "icon-chanpin",
                        "sortIndex": 2,
                        "accessSupport": "support",
                        "assetType": "product",
                        "showPage": [
                            "device-product"
                        ],
                        "permissions": [
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "network-config",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-mapping",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "standard-model",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "access-protocol-plugin",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "standardModel/main",
                "name": "标准物模型",
                "sortIndex": 2,
                "owner": "iot",
                "url": "/kh_access/standardModel",
                "icon": "icon-shebei",
                "children": [
                    {
                        "code": "standardAbility",
                        "name": "标准能力库",
                        "owner": "iot",
                        "sortIndex": 1,
                        "url": "/kh_access/standardModel/standardAbility",
                        "icon": "icon-chanpinfenlei",
                        "showPage": [
                            "device-category"
                        ],
                        "permissions": [
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "standard-ability",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save",
                                    "execute"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":12,\"title\":\"能力数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/standard/ability/_count\",\"params\":{\"method\":\"GET\"},\"resDataKey\":\"result\"}},{\"componentName\":\"Statistic\",\"colSpan\":12,\"title\":\"功能点\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/standard/ability/point/_count\",\"params\":{\"method\":\"GET\"},\"resDataKey\":\"result\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "standard-ability",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "standard-ability",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "standard-ability",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "standard-ability",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启用/禁用",
                                "permissions": [
                                    {
                                        "permission": "standard/ability",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "standard/ability",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "standard/ability",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "standardModel",
                        "name": "标准物模型",
                        "owner": "iot",
                        "sortIndex": 2,
                        "url": "/kh_access/standardModel/Instance",
                        "icon": "icon-chanpinfenlei",
                        "showPage": [
                            "device-category"
                        ],
                        "permissions": [
                            {
                                "permission": "standard-model",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"品类/模板数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/standard/model/_count\",\"params\":{\"method\":\"GET\"},\"resDataKey\":\"result\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "standard-model",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "standard-model",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "standard-model",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "standard-model",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "standard-model",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "device/Category",
                        "name": "行业场景",
                        "owner": "iot",
                        "sortIndex": 3,
                        "url": "/kh_access/standardModel/Category",
                        "icon": "icon-chanpinfenlei",
                        "accessSupport": "support",
                        "assetType": "deviceCategory",
                        "showPage": [
                            "device-category"
                        ],
                        "permissions": [],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"场景数\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/device/category/scene/count\",\"params\":{\"method\":\"POST\",\"data\":{\"paging\":false,\"sorts\":[{\"name\":\"sortIndex\",\"order\":\"asc\"},{\"name\":\"createTime\",\"order\":\"desc\"}],\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"type\",\"value\":\"scene\"}]}],\"total\":0}},\"resDataKey\":\"result\"}}]}",
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "link",
                "name": "平台网关配置",
                "owner": "iot",
                "url": "/kh_access/link",
                "icon": "icon-xitongxinxi",
                "sortIndex": 3,
                "permissions": [],
                "children": [
                    {
                        "code": "link/AccessConfig",
                        "name": "设备接入网关",
                        "owner": "iot",
                        "sortIndex": 1,
                        "url": "/kh_access/link/accessConfig",
                        "icon": "icon-wangguanzishebei",
                        "showPage": [
                            "device-gateway"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "opc-point",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "opc-client",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "opc-device-bind",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "opc-point",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "media-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "opc-client",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "opc-device-bind",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "link/Protocol",
                        "name": "协议管理",
                        "owner": "iot",
                        "sortIndex": 2,
                        "url": "/kh_access/link/protocol",
                        "icon": "icon-tongzhiguanli",
                        "showPage": [
                            "protocol-supports"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "system_config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "system_config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query",
                                            "save",
                                            "action"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "link/Type",
                        "name": "网络组件",
                        "owner": "iot",
                        "sortIndex": 3,
                        "url": "/kh_access/link/type",
                        "icon": "icon-wangluozujian",
                        "showPage": [
                            "network-config"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query",
                                            "save",
                                            "action"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "link/Certificate",
                        "name": "证书管理",
                        "owner": "iot",
                        "sortIndex": 4,
                        "url": "/kh_access/link/Certificate",
                        "icon": "icon-zhengshuguanli",
                        "showPage": [
                            "certificate"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "certificate",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "media",
                "name": "视频中心",
                "owner": "iot",
                "url": "/kh_access/media",
                "icon": "icon-shipinwangguan",
                "sortIndex": 4,
                "children": [
                    {
                        "code": "media/Device",
                        "name": "视频设备",
                        "owner": "iot",
                        "sortIndex": 1,
                        "url": "/kh_access/media/device",
                        "icon": "icon-shipinwangguan",
                        "accessSupport": "indirect",
                        "indirectMenus": [
                            "2-1-1"
                        ],
                        "showPage": [
                            "media-device"
                        ],
                        "permissions": [
                            {
                                "permission": "media-gateway",
                                "actions": [
                                    "enable",
                                    "disable",
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "media-record",
                                "actions": [
                                    "record",
                                    "query",
                                    "sync"
                                ]
                            },
                            {
                                "permission": "media-channel",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-gateway",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "gb28181-cascade",
                                "actions": [
                                    "bind",
                                    "unbind",
                                    "enable",
                                    "disable",
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "media-device",
                                "actions": [
                                    "stop",
                                    "ptz",
                                    "record",
                                    "query",
                                    "start",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "stop",
                                            "ptz",
                                            "record",
                                            "query",
                                            "start",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "media-channel",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "bind",
                                            "unbind",
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "description": "",
                                "permissions": [
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "media/SplitScreen",
                        "name": "分屏展示",
                        "owner": "iot",
                        "sortIndex": 2,
                        "url": "/kh_access/media/SplitScreen",
                        "icon": "icon-fenpingzhanshi",
                        "showPage": [
                            "media-device"
                        ],
                        "permissions": [
                            {
                                "permission": "media-channel",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "media-device",
                                "actions": [
                                    "stop",
                                    "ptz",
                                    "record",
                                    "query",
                                    "start",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "description": "",
                                "permissions": [
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "media/Stream",
                        "name": "流媒体服务",
                        "owner": "iot",
                        "sortIndex": 3,
                        "url": "/kh_access/media/Stream",
                        "icon": "icon-shipinwangguan",
                        "showPage": [
                            "media-server"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "media/Cascade",
                        "name": "国标级联",
                        "owner": "iot",
                        "sortIndex": 4,
                        "url": "/kh_access/media/Cascade",
                        "icon": "icon-guojijilian",
                        "showPage": [
                            "gb28181-cascade"
                        ],
                        "permissions": [
                            {
                                "permission": "gb28181-cascade",
                                "actions": [
                                    "bind",
                                    "unbind",
                                    "enable",
                                    "disable",
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "enable",
                                            "disable",
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "push",
                                "name": "推送",
                                "permissions": [
                                    {
                                        "permission": "media-channel",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "channel",
                                "name": "选择通道",
                                "permissions": [
                                    {
                                        "permission": "media-device",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "media-channel",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "bind",
                                            "unbind",
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "gb28181-cascade",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "code": "super",
        "name": "超级设备管理",
        "owner": "iot",
        "url": "/kh_super",
        "icon": "icon-chaojishebeiguanli",
        "sortIndex": 3,
        "permissions": [],
        "children": [
            {
                "code": "superTwin",
                "name": "超级设备孪生体",
                "sortIndex": 1,
                "owner": "iot",
                "url": "/kh_super/deviceTwin",
                "icon": "icon-shebei",
                "children": [
                    {
                        "code": "super/Device",
                        "name": "超级设备",
                        "owner": "iot",
                        "url": "/kh_super/deviceTwin/Device",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "accessSupport": "support",
                        "assetType": "superDevice",
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"超级设备数\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/super/device/instance/page\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":12,\"pageIndex\":0,\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"superDeviceType\",\"value\":\"superDevice\",\"type\":\"and\"}]}],\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "super-device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "super-device-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete",
                                    "disable",
                                    "enable"
                                ]
                            },
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "protocol-supports",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-api",
                                "actions": [
                                    "query-device-events"
                                ]
                            },
                            {
                                "permission": "things-collector",
                                "actions": [
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "edge-operations",
                                "actions": [
                                    "invoke"
                                ]
                            },
                            {
                                "permission": "device-gateway",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-instance",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-version",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "retention-message",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "unbind",
                                "name": "解绑",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "unbind-user",
                                            "query",
                                            "bind-user"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "assets-bind",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "bind",
                                "name": "绑定",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "assets-bind",
                                        "actions": [
                                            "unbind",
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "unbind-user"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "tigger",
                                "name": "手动触发",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "export"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "import",
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "visualization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-opt-api",
                                        "actions": [
                                            "read-property",
                                            "invoke-function",
                                            "write-property"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dictionary",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-category",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "media-server",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dashboard",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query",
                                            "disable",
                                            "enable"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "enable",
                                            "disable",
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "reload",
                                "name": "规则下发",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "deploy",
                                "name": "部署",
                                "permissions": [
                                    {
                                        "permission": "super-device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "super/Model",
                        "name": "超级设备模板",
                        "owner": "iot",
                        "url": "/kh_super/deviceTwin/Model",
                        "icon": "icon-shebei",
                        "sortIndex": 2,
                        "accessSupport": "support",
                        "assetType": "superProduct",
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"模板数\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/device/product/ex/super/product/_query\",\"params\":{\"method\":\"POST\",\"data\":{\"terms\":[{\"terms\":[]},{\"terms\":[{\"termType\":\"eq\",\"column\":\"auto_device_id$isnull\",\"value\":\"1\"},{\"termType\":\"eq\",\"column\":\"superProductType\",\"value\":\"superProduct\"}]}],\"current\":1,\"pageSize\":19,\"pageIndex\":0,\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "device-product-ex"
                        ],
                        "permissions": [
                            {
                                "permission": "device-product-ex",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "network-config",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-mapping",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save",
                                            ""
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "tigger",
                                "name": "手动触发",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "device-product-ex",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "deploy",
                                "name": "部署"
                            }
                        ]
                    }
                ]
            },
            {
                "code": "controller",
                "name": "开鸿网关管理",
                "sortIndex": 2,
                "owner": "iot",
                "url": "/kh_super/controller",
                "icon": "icon-shebei",
                "children": [
                    {
                        "code": "controller/Instance",
                        "name": "开鸿控制器",
                        "owner": "iot",
                        "url": "/kh_super/controller/Instance",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "accessSupport": "support",
                        "assetType": "device",
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"控制器数量\",\"valueStyle\":{\"paddingTop\":\"8px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/device/instance/regulator/page\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":19,\"pageIndex\":0,\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"categoryType\",\"value\":\"regulator\",\"type\":\"and\"}]}],\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"子设备\"},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"应用\"}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "regulator-instance",
                            "app-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "regulator-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete",
                                    "import",
                                    "export"
                                ]
                            },
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "network-config",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-mapping",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-instance",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-version",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-channel",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "retention-message",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-channel",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "query",
                                            "export"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "query",
                                            "save",
                                            "import"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-channel",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "tigger",
                                "name": "手动触发",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-channel",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "run",
                                "name": "运行",
                                "permissions": []
                            },
                            {
                                "id": "stop",
                                "name": "停止",
                                "permissions": []
                            },
                            {
                                "id": "config",
                                "name": "配置",
                                "permissions": []
                            },
                            {
                                "id": "deploy",
                                "name": "部署",
                                "permissions": [
                                    {
                                        "permission": "regulator-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "controller/Adapter",
                        "name": "开鸿适配器",
                        "owner": "iot",
                        "url": "/kh_super/controller/Adapter",
                        "icon": "icon-shebei",
                        "sortIndex": 2,
                        "accessSupport": "support",
                        "assetType": "device",
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"适配器数量\",\"valueStyle\":{\"paddingTop\":\"8px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/device-instance/_query/\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":19,\"pageIndex\":0,\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"categoryType\",\"value\":\"adaptor\",\"type\":\"and\"}]}],\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"子设备\"}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "adaptor-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "adaptor-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete",
                                    "import",
                                    "export"
                                ]
                            },
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "network-config",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-mapping",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "retention-message",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "export"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save",
                                            "import"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation\"",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "retention-message",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "tigger",
                                "name": "手动触发",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "model-ability-relation",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "run",
                                "name": "运行",
                                "permissions": []
                            },
                            {
                                "id": "stop",
                                "name": "停止",
                                "permissions": []
                            },
                            {
                                "id": "config",
                                "name": "配置",
                                "permissions": []
                            },
                            {
                                "id": "deploy",
                                "name": "部署",
                                "permissions": []
                            }
                        ]
                    }
                ]
            },
            {
                "code": "deviceAccess",
                "name": "设备接入管理",
                "sortIndex": 3,
                "owner": "iot",
                "url": "/kh_super/deviceAccess",
                "icon": "icon-shebei",
                "children": [
                    {
                        "code": "deviceAccess/Access",
                        "name": "开鸿插件",
                        "owner": "iot",
                        "url": "/kh_super/deviceAccess/Access",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"接入插件数\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/sofile/queryList\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":10,\"pageIndex\":0,\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "access-protocol-plugin"
                        ],
                        "permissions": [
                            {
                                "permission": "access-protocol-plugin",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "transparent-codec",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "network-config",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-mapping",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "access-protocol-plugin",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "deviceAccess/Configuration",
                        "name": "点位映射",
                        "owner": "iot",
                        "url": "/kh_super/deviceAccess/Configuration",
                        "icon": "icon-shebei",
                        "sortIndex": 2,
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"点位映射\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/access/config/_query\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":10,\"pageIndex\":0,\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "regulator-instance"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-mapping",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "access-point",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "access-point",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "access-point",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "adaptor-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "protocol-supports",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "relation",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "code": "ServiceCenter",
        "name": "应用与服务",
        "owner": "iot",
        "url": "/kh_ServiceCenter",
        "icon": "icon-yingyongfenfaguanli",
        "sortIndex": 4,
        "children": [
            {
                "code": "ServiceCenter/app",
                "name": "应用分发与部署",
                "owner": "iot",
                "url": "/kh_ServiceCenter/app",
                "icon": "icon-yuanzihua",
                "sortIndex": 1,
                "children": [
                    {
                        "code": "ServiceCenterManagement/myService",
                        "name": "原子化服务",
                        "owner": "iot",
                        "url": "/atomic-center/myServices",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"12x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"服务数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/atomic-center/app/page\",\"params\":{\"method\":\"POST\",\"data\":{\"limit\":12,\"name\":\"\",\"order\":\"desc\",\"orderField\":\"create_time\",\"page\":1}},\"resDataKey\":\"data.total\"}}],\"btnList\":[{\"type\":\"primary\",\"text\":\"新增\",\"width\":100,\"disabled\":false,\"params\":{\"type\":\"KH_ATOMIC_DISTRIBUTE\",\"code\":\"ServiceCenterManagement/myService\"}},{\"text\":\"查看\",\"width\":100,\"disabled\":false,\"params\":{\"type\":\"KH_ATOMIC_VIEW\",\"code\":\"ServiceCenterManagement/myService\"}}]}",
                        "buttons": [
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "AppCenterManagement/myApp",
                        "name": "KaihongOS应用",
                        "owner": "iot",
                        "url": "/atomic-center/appManagement",
                        "icon": "icon-shebei",
                        "sortIndex": 2,
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"应用数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/atomic-center/app/app/page\",\"params\":{\"method\":\"POST\",\"data\":{\"limit\":12,\"name\":\"\",\"order\":\"desc\",\"orderField\":\"create_time\",\"page\":1}},\"resDataKey\":\"data.total\"}}],\"btnList\":[{\"type\":\"primary\",\"text\":\"新增\",\"disabled\":false,\"params\":{\"type\":\"KH_APP_ADD\",\"code\":\"AppCenterManagement/myApp\"}},{\"text\":\"查看\",\"disabled\":false,\"params\":{\"type\":\"KH_APP_VIEW\",\"code\":\"AppCenterManagement/myApp\"}}]}",
                        "buttons": [
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "ServiceCenterManagement/OSComponent",
                        "name": "KaihongOS组件",
                        "owner": "iot",
                        "url": "/atomic-center/OSComponent",
                        "icon": "icon-shebei",
                        "sortIndex": 3,
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"组件数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/atomic-center/component/app/page\",\"params\":{\"method\":\"POST\",\"data\":{\"limit\":12,\"name\":\"\",\"order\":\"desc\",\"orderField\":\"create_time\",\"page\":1}},\"resDataKey\":\"data.total\"}}],\"btnList\":[{\"type\":\"primary\",\"text\":\"新增\",\"disabled\":false,\"params\":{\"type\":\"KH_OSComponent_ADD\",\"code\":\"ServiceCenterManagement/OSComponent\"}},{\"text\":\"查看\",\"disabled\":false,\"params\":{\"type\":\"KH_OSComponent_VIEW\",\"code\":\"ServiceCenterManagement/OSComponent\"}}]}",
                        "buttons": [
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "artificial/Instance",
                        "name": "AI应用管理",
                        "owner": "iot",
                        "url": "/kh_ServiceCenter/app/ai-model",
                        "icon": "icon-shebei",
                        "sortIndex": 4,
                        "showPage": [
                            "app-manager",
                            "app-instance",
                            "app-version",
                            "device-instance"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"AI应用\",\"valueStyle\":{\"paddingTop\":\"8px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/app/manager/_count\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":12,\"pageIndex\":0,\"terms\":[{\"terms\":[{\"column\":\"appType\",\"value\":\"ai\"}]}],\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result\"}},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"版本管理\"},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"边缘部署\"}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "permissions": [
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "app-version",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "app-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "standard-ability",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save",
                                    "execute"
                                ]
                            },
                            {
                                "permission": "standard-model",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "setting",
                                "name": "版本管理",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "publish",
                                "name": "发布",
                                "permissions": [
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "arrange",
                                "name": "部署实例",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "artificial/Container",
                        "name": "容器应用",
                        "owner": "iot",
                        "url": "/kh_ServiceCenter/app/container",
                        "icon": "icon-shebei",
                        "sortIndex": 5,
                        "showPage": [
                            "app-manager",
                            "app-instance",
                            "app-version",
                            "device-instance"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"应用\",\"valueStyle\":{\"paddingTop\":\"8px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/app/manager/_count\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageSize\":12,\"pageIndex\":0,\"terms\":[{\"terms\":[{\"column\":\"appType\",\"value\":\"others\"}]}],\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}]}},\"resDataKey\":\"result\"}},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"版本管理\"},{\"componentName\":\"Features\",\"colSpan\":12,\"value\":\"边缘部署\"}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "permissions": [
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "app-version",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "app-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "standard-ability",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save",
                                    "execute"
                                ]
                            },
                            {
                                "permission": "standard-model",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            },
                            {
                                "permission": "model-ability-relation",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "setting",
                                "name": "版本管理",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "publish",
                                "name": "发布",
                                "permissions": [
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "arrange",
                                "name": "部署实例",
                                "permissions": [
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "app-manager",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "app-version",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "AppCenterManagement/myAppOther",
                        "name": "其他应用或服务",
                        "owner": "iot",
                        "url": "/atomic-center/otherAppOrService",
                        "icon": "icon-shebei",
                        "sortIndex": 6,
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "app-manager",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "atomic-center",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"应用数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/atomic-center/app/other/page\",\"params\":{\"method\":\"POST\",\"data\":{\"limit\":12,\"name\":\"\",\"order\":\"desc\",\"orderField\":\"create_time\",\"page\":1}},\"resDataKey\":\"data.total\"}}],\"btnList\":[{\"type\":\"primary\",\"text\":\"新增\",\"disabled\":false,\"params\":{\"type\":\"KH_APP_ADD_OTHER\",\"code\":\"AppCenterManagement/myAppOther\"}},{\"text\":\"查看\",\"disabled\":false,\"params\":{\"type\":\"KH_APP_VIEW_OTHER\",\"code\":\"AppCenterManagement/myAppOther\"}}]}",
                        "buttons": [
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "atomic-center",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "operation",
                "name": "孪生业务系统",
                "owner": "iot",
                "url": "/kh_ServiceCenter/operation",
                "icon": "icon-yewuxitong",
                "sortIndex": 4,
                "children": [
                    {
                        "code": "application/management",
                        "name": "孪生业务系统",
                        "owner": "iot",
                        "url": "/atomic-center/application",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "biz",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "biz",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "biz",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "biz",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "biz",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "code": "dms",
        "name": "数据管理",
        "owner": "iot",
        "url": "/kh_dms",
        "icon": "icon-shujufuwu",
        "sortIndex": 6,
        "children": [
            {
                "code": "superData/cascade",
                "name": "级联管理",
                "owner": "iot",
                "url": "/superData/cascade",
                "icon": "icon-shebei",
                "sortIndex": 1,
                "children": [
                    {
                        "code": "superData/cascade/managementPlatform",
                        "name": "上级平台管理",
                        "owner": "iot",
                        "url": "/cascade-center/managementPlatform",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/upper/page\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageIndex\":0,\"pageSize\":20,\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}],\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"sourceType\",\"value\":\"0\"}]}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "cascade-upper",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save",
                                    "enable",
                                    "disable"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "enable",
                                "name": "启用",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query",
                                            "enable"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "disable",
                                "name": "禁用",
                                "permissions": [
                                    {
                                        "permission": "cascade-upper",
                                        "actions": [
                                            "query",
                                            "disable"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "superData/cascade/accessPlatform",
                        "name": "接入平台管理",
                        "owner": "iot",
                        "url": "/cascade-center/accessPlatform",
                        "icon": "icon-shebei",
                        "sortIndex": 2,
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"数量\",\"valueStyle\":{\"paddingTop\":\"22px\"},\"valueConfig\":{\"type\":\"http\",\"url\":\"/api/cascade/lower/page\",\"params\":{\"method\":\"POST\",\"data\":{\"current\":1,\"pageIndex\":0,\"pageSize\":20,\"sorts\":[{\"name\":\"createTime\",\"order\":\"desc\"}],\"terms\":[{\"terms\":[{\"termType\":\"eq\",\"column\":\"sourceType\",\"value\":\"1\"}]}]}},\"resDataKey\":\"result.total\"}}],\"btnConf\":{\"add\":{\"mutualType\":\"drawer\",\"data\":{},\"model\":\"add\"},\"view\":{}}}",
                        "showPage": [
                            "device-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "cascade-lower",
                                "actions": [
                                    "query",
                                    "delete",
                                    "save",
                                    "enable",
                                    "disable"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "query",
                                "name": "查询",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "save",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "enable",
                                "name": "启用",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query",
                                            "enable"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "disable",
                                "name": "禁用",
                                "permissions": [
                                    {
                                        "permission": "cascade-lower",
                                        "actions": [
                                            "query",
                                            "disable"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "data-clean",
                "name": "数据服务",
                "owner": "iot",
                "url": "/kh_dms/data-clean",
                "icon": "icon-shebei",
                "sortIndex": 2,
                "accessSupport": "support",
                "assetType": "device",
                "showPage": [
                    "filter-instance"
                ],
                "children": [
                    {
                        "code": "data-clean/Instance",
                        "name": "数据融合",
                        "owner": "iot",
                        "url": "/kh_dms/data-clean/Instance",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "accessSupport": "support",
                        "assetType": "device",
                        "showPage": [
                            "filter-instance"
                        ],
                        "permissions": [
                            {
                                "permission": "device-gateway",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "filter-instance",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query",
                                    "save",
                                    "query-secureKey",
                                    "delete"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "file",
                                        "actions": [
                                            "upload-static"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-gateway",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-instance",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "datasource-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dictionary-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-instance",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "datasource-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dictionary-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "network-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-instance",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "datasource-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "dictionary-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "code": "system",
        "name": "系统管理",
        "owner": "iot",
        "url": "/kh_system",
        "icon": "icon-xitongguanli",
        "sortIndex": 7,
        "permissions": [],
        "children": [
            {
                "code": "system/Basis",
                "name": "主题配置",
                "owner": "iot",
                "sortIndex": 1,
                "url": "/kh_system/Basis",
                "icon": "icon-xitong",
                "showPage": [
                    "system_config"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "system_config",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "保存",
                        "permissions": [
                            {
                                "permission": "system_config",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/User",
                "name": "用户管理",
                "owner": "iot",
                "sortIndex": 2,
                "url": "/kh_system/user",
                "icon": "icon-yonghuguanli",
                "showPage": [
                    "user"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "action",
                        "name": "启/禁用",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query",
                                    "save",
                                    "update-self-info"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query",
                                    "save",
                                    "update-self-info",
                                    "update-self-pwd"
                                ]
                            },
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "organization",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "organization",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Department",
                "name": "组织管理",
                "owner": "iot",
                "sortIndex": 3,
                "url": "/kh_system/Department",
                "icon": "icon-bumenguanli",
                "showPage": [
                    "organization"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "bind",
                        "name": "资产解绑",
                        "permissions": [
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "unbind",
                                    "query"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "organization",
                                "actions": [
                                    "unbind-user"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "bind-user",
                        "name": "绑定用户",
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "unbind-user",
                                    "query",
                                    "bind-user"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "assert",
                        "name": "资产分配",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-category",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "bind",
                                    "unbind",
                                    "query",
                                    "permission"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "delete"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-product",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "device-instance",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Role",
                "name": "角色管理",
                "owner": "iot",
                "sortIndex": 4,
                "url": "/kh_system/Role",
                "icon": "icon-user-async",
                "showPage": [
                    "role"
                ],
                "permissions": [
                    {
                        "permission": "role",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "buttons": [
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "role",
                                "actions": [
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "role",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "grant"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "user",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "role",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "grant"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Menu",
                "name": "菜单管理",
                "owner": "iot",
                "sortIndex": 6,
                "url": "/kh_system/Menu",
                "icon": "icon-caidanguanli",
                "showPage": [
                    "menu"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "menu",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "permission",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "bind",
                                    "unbind",
                                    "query",
                                    "permission"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "query",
                                    "save",
                                    "grant"
                                ]
                            },
                            {
                                "permission": "permission",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "menu",
                                "actions": [
                                    "query",
                                    "grant",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "assets-bind",
                                "actions": [
                                    "bind",
                                    "unbind",
                                    "query",
                                    "permission"
                                ]
                            },
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "query",
                                    "save",
                                    "grant"
                                ]
                            },
                            {
                                "permission": "permission",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Permission",
                "name": "权限管理",
                "owner": "iot",
                "sortIndex": 7,
                "url": "/kh_system/Permission",
                "icon": "icon-lock",
                "showPage": [
                    "permission"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "action",
                        "name": "启/禁用",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "export",
                        "name": "导出",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "import",
                        "name": "导入",
                        "permissions": [
                            {
                                "permission": "file",
                                "actions": [
                                    "upload-static"
                                ]
                            },
                            {
                                "permission": "permission",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query",
                                    "save",
                                    "grant"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "permission",
                                "actions": [
                                    "query",
                                    "save",
                                    "grant"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Platforms/Setting",
                "name": "API配置",
                "owner": "iot",
                "sortIndex": 9,
                "url": "/kh_system/Api",
                "icon": "icon-api",
                "showPage": [
                    "open-api"
                ],
                "permissions": [
                    {
                        "permission": "open-api",
                        "actions": [
                            "query",
                            "save"
                        ]
                    },
                    {
                        "permission": "application",
                        "actions": [
                            "query"
                        ]
                    }
                ],
                "buttons": [
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "open-api",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "save"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "open-api",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "system/Apply",
                "name": "应用鉴权",
                "owner": "iot",
                "sortIndex": 10,
                "url": "/kh_system/Apply",
                "icon": "icon-yingyongguanli",
                "showPage": [
                    "application"
                ],
                "permissions": [],
                "buttons": [
                    {
                        "id": "delete",
                        "name": "删除",
                        "permissions": [
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "add",
                        "name": "新增",
                        "permissions": [
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "open-api",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "update",
                        "name": "编辑",
                        "permissions": [
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "menu",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "application",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            },
                            {
                                "permission": "open-api",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "view",
                        "name": "查看",
                        "permissions": [
                            {
                                "permission": "application",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "role",
                                "actions": [
                                    "query"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "action",
                        "name": "启/禁用",
                        "permissions": [
                            {
                                "permission": "application",
                                "actions": [
                                    "save"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "code": "operation-management",
        "name": "运维管理",
        "owner": "iot",
        "url": "/kh_operation-management",
        "icon": "icon-pingtaigaikuang",
        "sortIndex": 8,
        "permissions": [],
        "children": [
            {
                "code": "systemUpgrade",
                "name": "系统升级",
                "owner": "iot",
                "url": "/kh_operation-management/upgrade",
                "icon": "icon-xitongxinxi",
                "sortIndex": 1,
                "permissions": [],
                "children": [
                    {
                        "code": "device/Firmware",
                        "name": "远程升级",
                        "owner": "iot",
                        "sortIndex": 3,
                        "url": "/kh_operation-management/upgrade/Instance",
                        "icon": "icon-yuanchengshengji",
                        "showPage": [
                            "firmware-manager"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "firmware-upgrade-task-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "firmware-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "firmware-upgrade-task-manager",
                                        "actions": [
                                            "query",
                                            "save",
                                            "deploy"
                                        ]
                                    },
                                    {
                                        "permission": "firmware-manager",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "system_config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "firmware-manager",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "firmware-upgrade-task-manager",
                                        "actions": [
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "firmware-manager",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "device-product",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "system_config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "device-instance",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "firmware-upgrade-task-manager",
                                        "actions": [
                                            "query",
                                            "save",
                                            "deploy"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "ServicePlatformMonitor",
                "name": "运维监控",
                "owner": "iot",
                "url": "/operation-management/service-platform-monitor",
                "icon": "icon-keshihua",
                "sortIndex": 2,
                "showPage": [
                    "dashboard"
                ],
                "children": [
                    {
                        "code": "operation-management/service-platform-monitor",
                        "name": "平台服务监控",
                        "owner": "iot",
                        "url": "/operation-management/service-platform-monitor",
                        "icon": "icon-peizhi",
                        "sortIndex": 2,
                        "showPage": [
                            "dashboard"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Image\",\"colSpan\":6,\"iconName\":\"iconcolor-pingtaifuwujiankong\",\"wrapStyle\":{\"paddingTop\":\"32px\",\"fontSize\":\"54px\"}}]}"
                    },
                    {
                        "code": "operation-management/DFX-situation-analysis",
                        "name": "DFX态势分析",
                        "owner": "iot",
                        "url": "/operation-management/DFX-situation-analysis",
                        "icon": "icon-peizhi",
                        "sortIndex": 2,
                        "showPage": [
                            "dashboard"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Tag\",\"colSpan\":12,\"title\":\"开鸿OS\",\"colPull\":6},{\"componentName\":\"Image\",\"colSpan\":24,\"iconName\":\"iconcolor-bianzu\",\"wrapStyle\":{\"fontSize\":54,\"paddingTop\":16}}]}"
                    },
                    {
                        "code": "operation-management/device-monitor",
                        "name": "设备监控",
                        "owner": "iot",
                        "url": "/operation-management/device-monitor",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "showPage": [
                            "dashboard"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Tag\",\"colSpan\":12,\"title\":\"开鸿OS\",\"colPull\":6},{\"componentName\":\"Statistic\",\"colSpan\":24,\"title\":\"设备数量\",\"valueStyle\":{\"paddingTop\":8},\"valueConfig\":{\"type\":\"http\",\"url\":\"/alert-api/objects/event-report/count\",\"params\":{\"method\":\"GET\"},\"resDataKey\":\"result\"}}]}"
                    }
                ]
            },
            {
                "code": "operateAnalysis",
                "name": "运营分析",
                "owner": "iot",
                "url": "/operation-management/operate-analysis",
                "icon": "icon-keshihua",
                "sortIndex": 3,
                "showPage": [
                    "dashboard"
                ],
                "children": [
                    {
                        "code": "operation-management/operate-analysis",
                        "name": "运营分析",
                        "owner": "iot",
                        "url": "/operation-management/operate-analysis",
                        "icon": "icon-shebei",
                        "sortIndex": 1,
                        "showPage": [
                            "dashboard"
                        ],
                        "cardData": "{\"size\":\"6x1\",\"content\":[{\"componentName\":\"Tag\",\"colSpan\":12,\"title\":\"开鸿OS\",\"colPull\":6},{\"componentName\":\"Image\",\"colSpan\":24,\"iconName\":\"iconcolor-jiekoujianquanguanli\",\"wrapStyle\":{\"paddingTop\":8,\"fontSize\":54}}]}"
                    }
                ]
            },
            {
                "code": "business",
                "name": "告警管理",
                "sortIndex": 4,
                "owner": "iot",
                "url": "/kh_operation-management/business",
                "icon": "icon-keshihua",
                "children": [
                    {
                        "code": "rule-engine/Alarm/Config",
                        "name": "告警基础配置",
                        "owner": "iot",
                        "sortIndex": 1,
                        "url": "/kh_operation-management/business/alarmConfig",
                        "icon": "icon-peizhi",
                        "showPage": [
                            "alarm-config"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "update",
                                "name": "保存",
                                "permissions": [
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "rule-engine/Alarm/Configuration",
                        "name": "告警高级配置",
                        "owner": "iot",
                        "sortIndex": 2,
                        "url": "/kh_operation-management/business/Configuration",
                        "icon": "icon-peizhi",
                        "showPage": [
                            "alarm-config"
                        ],
                        "permissions": [
                            {
                                "permission": "organization",
                                "actions": [
                                    "query"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-record",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "启/禁用",
                                "permissions": [
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-record",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query",
                                            "save",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "tigger",
                                "name": "手动触发",
                                "permissions": [
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "rule-scene",
                                        "actions": [
                                            "query",
                                            "save",
                                            "execute"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "rule-engine/Alarm/Log",
                        "name": "告警记录",
                        "owner": "iot",
                        "sortIndex": 3,
                        "url": "/kh_operation-management/business/alarm-log",
                        "icon": "icon-changjingliandong",
                        "showPage": [
                            "alarm-record"
                        ],
                        "permissions": [],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "alarm-record",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "action",
                                "name": "告警处理",
                                "permissions": [
                                    {
                                        "permission": "alarm-record",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "organization",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "alarm-config",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "notice/Config",
                        "name": "通知配置",
                        "owner": "iot",
                        "url": "/kh_operation-management/business/notice",
                        "icon": "icon-tongzhiguanli",
                        "sortIndex": 4,
                        "showPage": [
                            "notifier"
                        ],
                        "permissions": [
                            {
                                "permission": "notifier",
                                "actions": [
                                    "query",
                                    "save",
                                    "delete",
                                    "send"
                                ]
                            },
                            {
                                "permission": "user-third-party-manager",
                                "actions": [
                                    "query",
                                    "save"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "bind",
                                "name": "同步用户",
                                "permissions": [
                                    {
                                        "permission": "add",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user-third-party-manager",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    },
                                    {
                                        "permission": "user",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "log",
                                "name": "通知记录",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "debug",
                                "name": "调试",
                                "permissions": [
                                    {
                                        "permission": "add",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "send"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "notice/Template",
                        "name": "通知模板",
                        "owner": "iot",
                        "url": "/kh_operation-management/business/Template",
                        "icon": "icon-tongzhiguanli",
                        "sortIndex": 5,
                        "showPage": [
                            "template"
                        ],
                        "permissions": [
                            {
                                "permission": "template",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "notifier",
                                "actions": [
                                    "query",
                                    "send"
                                ]
                            }
                        ],
                        "buttons": [
                            {
                                "id": "view",
                                "name": "查看",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "log",
                                "name": "通知记录",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "debug",
                                "name": "调试",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query",
                                            "send"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "add",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "export",
                                "name": "导出",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "import",
                                "name": "导入",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query",
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "delete",
                                "name": "删除",
                                "permissions": [
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "query",
                                            "delete"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "update",
                                "name": "编辑",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "add",
                                "name": "新增",
                                "permissions": [
                                    {
                                        "permission": "notifier",
                                        "actions": [
                                            "query"
                                        ]
                                    },
                                    {
                                        "permission": "template",
                                        "actions": [
                                            "save"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "LogManage",
                "name": "日志管理",
                "owner": "iot",
                "url": "/kh_operation-management/Log",
                "icon": "icon-xitongxinxi",
                "sortIndex": 5,
                "permissions": [],
                "children": [
                    {
                        "code": "Log",
                        "name": "日志管理",
                        "owner": "iot",
                        "sortIndex": 5,
                        "url": "/kh_operation-management/Log/Instance",
                        "icon": "icon-rizhiguanli",
                        "showPage": [
                            "system-logger",
                            "access-logger"
                        ],
                        "permissions": [
                            {
                                "permission": "system-logger",
                                "actions": [
                                    "query"
                                ]
                            },
                            {
                                "permission": "access-logger",
                                "actions": [
                                    "self-data",
                                    "query"
                                ]
                            }
                        ],
                        "buttons": []
                    }
                ]
            }
        ]
    }
]