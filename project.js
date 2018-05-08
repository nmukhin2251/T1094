define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1525790886620,
	"listProductVersion": "1.0.9.4",
	"components": [
		{
			"Title": "Task",
			"ContentTypeId": "0x010800ABB5DBD89BD5AC4FB193C92BD702047C",
			"Require": {
				"name": "task",
				"proto": false,
				"path": "task"
			},
			"Markup": {
				"tag": "component-task"
			},
			"Params": {
				"InternalName": "spaf_000040000main",
				"namespace": "task",
				"promoted": false
			},
			"Id": "spaf_000040000main",
			"Permalink": "https://spaforms365.com/docs/syslib-layout/",
			"Process": {
				"Settings": {
					"Enforce Process Security Model": true,
					"Promote Process State Label": true,
					"Promote Process History": false,
					"emailNotification": {
						"subject": "New task assigned for your review ...",
						"body": "review new task"
					}
				},
				"States": {
					"spaf_000010newform": {
						"label": "New Form",
						"type": "Form",
						"readonly": false,
						"namespace": "task",
						"componentId": "spaf_000040000main",
						"assignedTo": {
							"Everyone": true,
							"Manager": false,
							"Groups": [
								"Development Members"
							]
						}
					},
					"spaf_00001000draft": {
						"label": "Draft",
						"type": "Form",
						"readonly": false,
						"namespace": "task",
						"componentId": "spaf_000040000main",
						"assignedTo": {
							"Everyone": true,
							"Manager": false,
							"Groups": [
								"Development Members"
							]
						}
					},
					"spaf_00001complete": {
						"label": "Approved",
						"type": "Form",
						"readonly": true,
						"namespace": "task",
						"componentId": "spaf_000040000main",
						"assignedTo": {
							"Everyone": true,
							"Manager": false,
							"Groups": [
								"Development Members"
							]
						}
					},
					"spaf_00001rejected": {
						"label": "Rejected",
						"type": "Form",
						"readonly": false,
						"namespace": "task",
						"componentId": "spaf_000040000main",
						"assignedTo": {
							"Everyone": true,
							"Manager": false,
							"Groups": [
								"Development Members"
							]
						}
					},
					"spaf_1525454785296": {
						"label": "Review",
						"type": "Task",
						"readonly": false,
						"namespace": "state_review",
						"componentId": "state_review",
						"assignedTo": {
							"Everyone": true,
							"Manager": false,
							"Groups": [
								"state_review"
							]
						}
					}
				}
			}
		},
		{
			"Title": "transition_close",
			"Require": {
				"name": "transition_close",
				"proto": false,
				"path": "transition_close"
			},
			"Markup": {
				"tag": "component-transition_close"
			},
			"Params": {
				"namespace": "listItem",
				"visible": true,
				"Title": "transition",
				"from": "New Form",
				"to": "New Form",
				"closeonclick": false,
				"emailNotification": false,
				"logHistory": ""
			},
			"Permalink": "https://spaforms365.com/docs/syslib-transition/",
			"Id": "transition_close"
		},
		{
			"Title": "transition_save",
			"Require": {
				"name": "transition_save",
				"proto": false,
				"path": "transition_save"
			},
			"Markup": {
				"tag": "component-transition_save"
			},
			"Params": {
				"namespace": "listItem",
				"visible": true,
				"Title": "transition",
				"from": "New Form",
				"to": "New Form",
				"closeonclick": false,
				"emailNotification": false,
				"logHistory": ""
			},
			"Permalink": "https://spaforms365.com/docs/syslib-transition/",
			"Id": "transition_save"
		},
		{
			"Title": "transition_delete",
			"Require": {
				"name": "transition_delete",
				"proto": false,
				"path": "transition_delete"
			},
			"Markup": {
				"tag": "component-transition_delete"
			},
			"Params": {
				"namespace": "listItem",
				"visible": true,
				"Title": "transition",
				"from": "New Form",
				"to": "New Form",
				"closeonclick": false,
				"emailNotification": false,
				"logHistory": ""
			},
			"Permalink": "https://spaforms365.com/docs/syslib-transition/",
			"Id": "transition_delete"
		},
		{
			"Title": "state_review",
			"Require": {
				"name": "state_review",
				"proto": false,
				"path": "state_review"
			},
			"Markup": {
				"tag": "component-state_review"
			},
			"Params": {
				"name": "state_review",
				"namespace": "state_review",
				"promoted": false
			},
			"Permalink": "https://spaforms365.com/docs/syslib-state/",
			"Id": "state_review",
			"LayoutId": "spaf_1525454785296"
		}
	],
	"columns": {
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Task Name\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" Sealed=\"TRUE\" ColName=\"nvarchar1\" Description=\"description from sharepoint\" />",
		"Priority": "<Field ID=\"{a8eb573e-9e11-481a-a8c9-1104a54b2fbd}\" Type=\"Choice\" Name=\"Priority\" DisplayName=\"Priority\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Priority\" ColName=\"nvarchar3\"><CHOICES><CHOICE>(1) High</CHOICE><CHOICE>(2) Normal</CHOICE><CHOICE>(3) Low</CHOICE></CHOICES><MAPPINGS><MAPPING Value=\"1\">(1) High</MAPPING><MAPPING Value=\"2\">(2) Normal</MAPPING><MAPPING Value=\"3\">(3) Low</MAPPING></MAPPINGS><Default>(2) Normal</Default></Field>",
		"Status": "<Field Type=\"Choice\" ID=\"{c15b34c3-ce7d-490a-b133-3f4de8801b76}\" Name=\"Status\" DisplayName=\"Task Status\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Status\" ColName=\"nvarchar4\"><CHOICES><CHOICE>Not Started</CHOICE><CHOICE>In Progress</CHOICE><CHOICE>Completed</CHOICE><CHOICE>Deferred</CHOICE><CHOICE>Waiting on someone else</CHOICE></CHOICES><MAPPINGS><MAPPING Value=\"1\">Not Started</MAPPING><MAPPING Value=\"2\">In Progress</MAPPING><MAPPING Value=\"3\">Completed</MAPPING><MAPPING Value=\"4\">Deferred</MAPPING><MAPPING Value=\"5\">Waiting on someone else</MAPPING></MAPPINGS><Default>Not Started</Default></Field>",
		"PercentComplete": "<Field Type=\"Number\" Name=\"PercentComplete\" ID=\"{d2311440-1ed6-46ea-b46d-daa643dc3886}\" Percentage=\"TRUE\" Min=\"0\" Max=\"1\" DisplayName=\"% Complete\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"PercentComplete\" ColName=\"float1\"><Default>0</Default></Field>",
		"AssignedTo": "<Field ID=\"{53101f38-dd2e-458c-b245-0c236cc13d1a}\" Type=\"UserMulti\" List=\"UserInfo\" Name=\"AssignedTo\" Mult=\"TRUE\" Sortable=\"FALSE\" ShowField=\"ImnName\" DisplayName=\"Assigned To\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"AssignedTo\" ColName=\"int2\" />",
		"Body": "<Field ID=\"{7662cd2c-f069-4dba-9e35-082cf976e170}\" Type=\"Note\" RichText=\"TRUE\" RestrictedMode=\"TRUE\" RichTextMode=\"FullHtml\" Name=\"Body\" DisplayName=\"Description\" Sortable=\"FALSE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Body\" ColName=\"ntext2\" />",
		"StartDate": "<Field ID=\"{64cd368d-2f95-4bfc-a1f9-8d4324ecb007}\" Type=\"DateTime\" Name=\"StartDate\" DisplayName=\"Start Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"StartDate\" ColName=\"datetime1\" />",
		"DueDate": "<Field Type=\"DateTime\" ID=\"{cd21b4c2-6841-4f9e-a23a-738a65f99889}\" Name=\"DueDate\" DisplayName=\"Due Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"DueDate\" ColName=\"datetime2\" />",
		"Attachments": "<Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\" />",
		"mwp_FormDocument": "<Field Type=\"Note\" DisplayName=\"SPA Form 365 Data\" Hidden=\"TRUE\" Description=\"SPA Form 365 JSON Data\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" NumLines=\"600\" RichText=\"FALSE\" Sortable=\"FALSE\" StaticName=\"mwp_FormDocument\" Name=\"mwp_FormDocument\" RestrictedMode=\"TRUE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" Version=\"1\" />",
		"mwp_FormID": "<Field ID=\"{3c53b379-6256-4ab5-bc14-8fa61360e526}\" Type=\"Text\" Name=\"mwp_FormID\" Required=\"FALSE\" DisplayName=\"Form ID\" Description=\"Unique Form Identificator\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormID\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar5\" RowOrdinal=\"0\"><Default>0</Default></Field>",
		"mwp_FormType": "<Field ID=\"{ac53b379-6156-4aa5-bc14-8fa6136be526}\" Type=\"Text\" Name=\"mwp_FormType\" Required=\"FALSE\" DisplayName=\"Form Type\" Description=\"Give SPA Form Name\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormType\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar6\" RowOrdinal=\"0\"><Default>Generic SPA Form</Default></Field>",
		"mwp_FormState": "<Field ID=\"{2223b379-4a56-25b5-bc14-8f3c5360e526}\" Type=\"Text\" Name=\"mwp_FormState\" Required=\"FALSE\" DisplayName=\"Form State\" Description=\"Form State\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormState\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar7\" RowOrdinal=\"0\"><Default>Draft</Default></Field>",
		"mwp_Attachments": "<Field Type=\"Note\" DisplayName=\"Attachments Map\" Group=\"_Hidden\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{17117ed8-0696-4031-b721-2ef99de31109}\" Name=\"mwp_Attachments\" StaticName=\"mwp_Attachments\" Sortable=\"FALSE\" RichText=\"FALSE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" UnlimitedLengthInDocumentLibrary=\"FALSE\" NumLines=\"6\" SourceID=\"{daf8e407-d019-4c86-ba35-822c1763ac52}\" Version=\"1\" ColName=\"ntext6\" RowOrdinal=\"0\" />",
		"spaf_1525456894560": "<Field Type=\"Text\" Name=\"spaf_1525456894560\" Required=\"TRUE\" DisplayName=\"PROMOTEDTEXT\" Description=\"\" Group=\"SPA FORMS 365\" MaxLength=\"100\" StaticName=\"spaf_1525456894560\" AllowDeletion=\"TRUE\" ID=\"{b20eb609-7cdf-4578-804d-ba9195c5d637}\" SourceID=\"{86bf96e2-2e7e-4a16-bf4a-f40876d9b0b9}\" ColName=\"nvarchar8\" RowOrdinal=\"0\" ReadOnly=\"FALSE\" Version=\"1\"><Default /></Field>"
	}
}
);});