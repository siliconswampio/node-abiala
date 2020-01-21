{
	"make_global_settings": [
		    ["CXX","/usr/bin/clang++-9"],
		    ["CC","/usr/bin/clang-cpp-9"],
	],
	"targets": [
		{
			"target_name": "abieos",
			"conditions": [
				["OS == 'linux'",{
					"sources": [
						"src/main.cpp",
						"src/abieos.cpp"
					],
					"cflags!": ["-fno-exceptions"],
					"cflags_cc!": ["-fno-exceptions"],
					"cflags": [
						"-Wall",
						"-Wextra",
						"-Wno-unused-parameter",
						"-std=c++17"
					],
					"cflags_cc": [
						"-Wall",
						"-Wextra",
						"-Wno-unused-parameter",
						"-std=c++17"
					],
				}]
			],
			"libraries": [],
			"include_dirs": [
				"external/date/include",
				"external/rapidjson/include",
				"<!@(node -p \"require('node-addon-api').include\")"
			]
		}
	]
}
