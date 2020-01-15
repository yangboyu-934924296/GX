
				var styleJson= [{
							'featureType': 'land', //调整土地颜色
							'elementType': 'geometry',
							'stylers': {
								'color': '#05161d'
							}
						},
						{
							'featureType': 'building', //调整建筑物颜色
							'elementType': 'geometry',
							'stylers': {
								'color': '#04406F'
							}
						},
						{
							'featureType': 'building', //调整建筑物标签是否可视
							'elementType': 'labels',
							'stylers': {
								'visibility': 'on'
							}
						},
						{
							'featureType': 'highway', //调整高速道路颜色
							'elementType': 'geometry',
							'stylers': {
								'color': '#015B99'
							}
						},
						{
							'featureType': 'highway', //调整高速名字是否可视
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'arterial', //调整一些干道颜色
							'elementType': 'geometry',
							'stylers': {
								'color': '#003051'
							}
						},
						{
							'featureType': 'arterial',
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'green',
							'elementType': 'geometry',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'water',
							'elementType': 'geometry',
							'stylers': {
								'color': '#033b58'
							}
						},
						{
							'featureType': 'subway', //调整地铁颜色
							'elementType': 'geometry.stroke',
							'stylers': {
								'color': '#003051'
							}
						},
						{
							'featureType': 'subway',
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'railway',
							'elementType': 'geometry',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'railway',
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'all', //调整所有的标签的边缘颜色
							'elementType': 'labels.text.stroke',
							'stylers': {
								'color': '#313131'
							}
						},
						{
							'featureType': 'all', //调整所有标签的填充颜色
							'elementType': 'labels.text.fill',
							'stylers': {
								'color': '#FFFFFF'
							}
						},
						{
							'featureType': 'manmade',
							'elementType': 'geometry',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'manmade',
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'local',
							'elementType': 'geometry',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'local',
							'elementType': 'labels',
							'stylers': {
								'visibility': 'off'
							}
						},
						{
							'featureType': 'subway',
							'elementType': 'geometry',
							'stylers': {
								'lightness': -65
							}
						},
						{
							'featureType': 'railway',
							'elementType': 'all',
							'stylers': {
								'lightness': -40
							}
						},
						{
							'featureType': 'boundary',
							'elementType': 'geometry',
							'stylers': {
								'color': '#064f85',
								'weight': '1',
								'lightness': -29
							}
						}
					]